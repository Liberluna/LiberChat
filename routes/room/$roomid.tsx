import { type Context } from "aleph/server"

export default function(req: Request, ctx: Context) {
  console.log(ctx)
  return <>
    <div>
      This room name is
      { ctx.params.roomid }
    </div>
  </>
}
