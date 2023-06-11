import { type Context } from "aleph/server"
import { useData } from "aleph/react"

export function data(req: Request, ctx: Context) {
  return { req, ctx }
}
export default function() {
  const { data } = useData()
  const { req } = data
  
  const roomId = new URL(req.url).pathname.split('/').at(-1)
  
  return <>
    <div>
      This room name is
      { roomId }
    </div>
  </>
}
