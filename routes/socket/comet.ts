import { Context } from "aleph/server"
import * as res from "~/utils/res/index.ts"

export function GET (req: Request, ctx: Context) {
  const params = new URL(req.url).searchParams
  
  if(params.has("msg")){
    return res.json({
      msg: params.get("msg")
    })
  }
}
