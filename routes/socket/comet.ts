import { Context } from "aleph/server"
import * as res from "~/utils/res/index.ts"

export function GET (req: Request, ctx: Context) {
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve(res.json({
        result: 0
      }))
    }, 2000)
  })
}