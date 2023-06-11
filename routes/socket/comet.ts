import { Context } from "aleph/server"
import * as res from "~/utils/res/index.ts"

let count = 0

export function GET (req: Request, ctx: Context) {
  count++
  
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve(res.json({
        result: 0,
        count,
      }))
    }, 2000)
  })
}
