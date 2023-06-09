
async function main(req: Request, ctx: Context){
  return Response.json({
    url: req.url.href
  })
}

export const GET = main
export const POST = main
export const PUT = main
export const DELETE = main
export const CONNECT = main
export const OPTIONS = main
export const TRACE = main
export const PATCH = main
