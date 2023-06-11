import { type Context } from "aleph/server"
import { useData } from "aleph/react"
import { useEffect } from "react"

export function data(req: Request, ctx: Context) {
  const url = new URL(req.url)
  
  return {
    roomid: url.pathname.split("/").at(-1),
  }
}

const connect = async () => {
  const { data } = useData()
  alert(data.roomid)
  
  const res = await fetch("/socket/commet", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      
    })
  })
}
export default function() {
  const { data } = useData()
  
  useEffect(()=>{
    connect()
  },[])
  return <>
    <div>
      {data.roomid}
    </div>
  </>
}
