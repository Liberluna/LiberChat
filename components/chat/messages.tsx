export interface MessagesProps {
  messages: any[]
}
export default (props: MessagesProps) => {
  return props.messages.map(message => {
    return <div>
      <div>{ message.name }</div>
      <div>{ message.body }</div>
    </div>
  })
}
