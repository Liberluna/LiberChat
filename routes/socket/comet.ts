import * as res from "resx"
import { HandlerContext } from "$fresh/server.ts";

const resolves: Record<string,resolve[]> = {}

type resolve = (...any: any) => void

export async function handler (req: Request, _ctx: HandlerContext) {
  if(req.method !== "POST"){
    return new Response("Method not allowed")
  }
  const data = await req.json()
  const room: string = data.room
  
  if(!resolves[room]){
    resolves[room] = []
  }
  
  if("message" in data){
    // 送信 mode
    for(const resolve of resolves[room]){
      console.log(room,"disconn")
      resolve(res.json({
        message: data.message
      }, {}))
    }
    return res.json({
      status: "ok!"
    }, {})
  }
  
  //return res.json({"a":"a"})
  return await new Promise((resolve) => {
    console.log(room,"conn")
    resolves[room].push(resolve)
  })
}
