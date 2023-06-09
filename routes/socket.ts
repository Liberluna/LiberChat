import { Server } from "https://deno.land/x/socket_io@0.2.0/mod.ts"

const io = new Server()

const handler = io.handler()

async function main(req: Request, ctx: Context){
  console.log(handler)
  return handler(req)
  /*new Response(JSON.stringify({
    url: "s"
  }))*/
}

export const GET = main
export const POST = main
export const PUT = main
export const DELETE = main
export const CONNECT = main
export const OPTIONS = main
export const TRACE = main
export const PATCH = main
