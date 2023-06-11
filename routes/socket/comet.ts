import { Context } from "aleph/server"
import * as res from "~/utils/res/index.ts"

const resolves = []

export async function POST (req: Request, ctx: Context) {
  const data = await req.json()
  
  const room: string = data.room
  
  if(!resolves[room]){
    resolves[room] = []
  }
  
  if("message" in data){
    // 送信 mode
    for(const resolve of resolves[room]){
      resolve(res.json({
        message: data.message
      }))
    }
    return res.json({
      status: "ok!"
    })
  }
  
  //return res.json({"a":"a"})
  return await new Promise((resolve) => {
    resolves[room].push(resolve)
  })
}
