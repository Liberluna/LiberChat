import { type Context } from "aleph/server"
import { useData, Head } from "aleph/react"
import { useEffect, useState } from "react"
import ky from "ky"
import { type Message } from "~/system/chat/index.ts"
import Messages from "~/components/chat/messages.tsx"

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
    body: JSON.stringify({
      room: roomId,
    }),
  })
  if(res.status !== 200){
    // Error
    return { error: "error" }
  }
  // OK
  return {
    data: await res.json()
  }
}

interface GetMessagesResult {
  error: string
  data: {
    message: Message
  }
}
async function *getMessages(options){
  const { roomId } = options
  while(true){
    const result: GetMessagesResult = await connect({
      roomId,
    }) as GetMessagesResult
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
  
  const [messages, setMessages] = useState([])
  
  useEffect(async ()=>{
    for await (const messageData of getMessages({
      roomId: data.roomId,
    })){
      const { data } = messageData
      const { message } = data
      if(!message){
        continue
      }
      setMessages([...messages, "aa"])
      alert(messages)
    }
  },[])
  return <>
    <Head>
      <title>{`#${data.roomId} | LiberChat`}</title>
    </Head>
    <div>
      {data.roomId}
    </div>
    <div>
      <Messages messages={messages}/>
    </div>
    <div>
      <button onClick={async()=>{
        alert(await ky.post("/socket/comet", {
          json: {
            message: {
              user: "Baka",
              room: "a",
              body: "ja"
            },
            room: "a",
          }
        }).text());
      }}>send</button>
    </div>
  </>
}
