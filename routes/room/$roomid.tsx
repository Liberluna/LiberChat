import { type Context } from "aleph/server"
import { useData } from "aleph/react"
import { useEffect } from "react"
import ky from "ky"

export function data(req: Request, ctx: Context) {
  const url = new URL(req.url)
  
  return {
    roomId: url.pathname.split("/").at(-1),
  }
}

const connect = async ({ roomId }) => {
  const res = await fetch("/socket/comet", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      room: roomId,
    })
  })
  alert(await res.text())
  if(res.status !== 200){
    // Error
    return { error: "error" }
  }
  // OK
  return { data: await res.json() }
}

async function *getMessages(options){
  const { roomId } = options
  while(true){
    const result = await connect({
      roomId,
    })
    if(result.error){
      // エラーだった
      continue // リトライ
    }
    // 正常
    yield result
  }
}
export default function() {
  const { data } = useData()
  
  useEffect(async ()=>{
    for await (const message of getMessages({
      roomId: data.roomId,
    })){
      alert(0)
    }
  },[])
  return <>
    <div>
      {data.roomId}
    </div>
  </>
}
