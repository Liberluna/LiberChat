import { Context } from "aleph/server"
import * as res from "~/utils/res/index.ts"

const resolves = []

export function GET (req: Request, ctx: Context) {
  const params = new URL(req.url).searchParams
  
  const room = params.get("room")
  
  if(!resolves[room]){
    resolves[room] = []
  }
  if(params.has("msg")){
    for(const resolve of resolves[room]){
      resolve(res.json({
        msg: params.get("msg")
      }))
    }
    return res.json({
      msg: params.get("msg")
    })
  }
  
  return new Promise((resolve) => {
    resolves[room].push(resolve)
  })
}
