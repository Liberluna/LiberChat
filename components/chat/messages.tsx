import { type Message } from "~/system/chat/index.ts"

export interface MessagesProps {
  messages: Message[]
}
export default (props: MessagesProps) => {
  return props.messages.map(message => {
    return <div>
      <div>{ message.user }</div>
      <div>{ message.body }</div>
    </div>
  })
}
