import { type Context } from "aleph/server"
import { useData } from "aleph/react"

export function data(req: Request, ctx: Context) {
  return { req, ctx }
}
export default function() {
  const { data } = useData()
  const { req, ctx } = data
  
  console.log(data)
  
  return <>
    <div>
      This room name is
      { roomId }
    </div>
  </>
}
