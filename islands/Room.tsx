import { YieldExpression } from "https://deno.land/x/ts_morph@17.0.1/ts_morph.js"
import { useRef } from "preact/hooks"
import ky from "ky"
import { Attributes, Component, ComponentChild, ComponentChildren, Ref } from "preact"
import { type Message } from "~/core/chat/index.ts"
import MessagesList from "~/components/MessagesList.tsx"

interface Props {
  roomId: string
}
const connect = async (options: { roomId: string }) => {
  const { roomId } = options

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
async function *getMessages(options: { roomId: string }){
  while(true){
    const result = await connect({
      roomId: options.roomId,
    })
    if(result.error) {
      continue
    }
    yield result
  }
}
export default class extends Component{
  state: Readonly<{
    messages: Message[]
  }>
  byProps: Props
  constructor(props: Props){
    super()
    this.state = {
      messages: []
    }
    this.byProps = props
  }
  render(props?: Readonly<Attributes & { children?: ComponentChildren; ref?: Ref<any> | undefined; }> | undefined, state?: Readonly<{}> | undefined, context?: any): ComponentChild {
    const inp = useRef<HTMLInputElement>(null)
    return <>
      <div className="flex">
      <input ref={inp} placeholder="message" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      <button onClick={() => {
              if (inp.current.value === "") {
                alert("送信できませんでした。");
              } else {
                ky.post("/socket/comet", {
                  json: {
                    room: this.byProps.roomId,
                    message: inp.current?.value,
                  },
                });
              }

              if (inp.current) {
                inp.current.value = "";
              } // inputBoxを空にする
            }}
        class="mx-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        >Send</button>
      </div>
      <div>
        <MessagesList messages={this.state.messages} />
      </div>
    </>
  }
  componentDidMount(): void {
    (async()=>{
      for await (const message of getMessages({ roomId: this.byProps.roomId })){
        (async()=>{
          this.setState({
            messages: [...this.state.messages, message.data.message],
          })
        })()
      }
    })()
  }
}
