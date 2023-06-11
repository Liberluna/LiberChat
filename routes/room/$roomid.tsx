import { type Context } from "aleph/server"

export default function(req: Request, ctx: Context) {
  return <>
    <div>
      This room name is
      { ctx.params.roomid }
    </div>
  </>
}
