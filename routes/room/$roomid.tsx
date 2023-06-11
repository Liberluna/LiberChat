import { type Context } from "aleph/server"
import { useData } from "aleph/react"
import { useEffect } from "react"

export function data(req: Request, ctx: Context) {
  const url = new URL(req.url)
  
  return {
    roomId: url.pathname.split("/").at(-1),
  }
}

const connect = async (args) => {
  const { roomId } = args
  alert(roomId)
  const res = await fetch("/socket/commet", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      room: roomId,
    })
  })
  if(res.status === 200){
    // OK
    const json = await res.json()
  }
  roomId(args)
}
export default function() {
  const { data } = useData()
  
  useEffect(()=>{
    connect({
      roomId: data.roomId,
    })
  },[])
  return <>
    <div>
      {data.roomId}
    </div>
  </>
}
