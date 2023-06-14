import { type Message } from "~/core/chat/index.ts"

export interface Props {
  messages: Message[]
}

export default function(props: Props){
  return props.messages.map((message) => {
    return <div>{message}</div>
  })
}
