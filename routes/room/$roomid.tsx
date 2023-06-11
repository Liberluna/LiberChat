import { type Context } from "aleph/server"

export default function(req: Request, ctx: Context) {
  const url = new URL(req.url)
  const roomId = url.pathname.split("/").at(-1)
  return <>
    <div>
      This room name is
      { roomId }
    </div>
  </>
}
