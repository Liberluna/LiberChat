import { type Context } from "aleph/server"
import { useData } from "aleph/react"

export function data(req: Request, ctx: Context) {
  const url = new URL(req.url)
  
  return {
    roomid: url.pathname.split("/").at(-1),
  }
}
export default function() {
  const { data } = useData()
  
  return <>
    <div>
      {data.roomid}
    </div>
  </>
}
