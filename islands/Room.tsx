import { YieldExpression } from "https://deno.land/x/ts_morph@17.0.1/ts_morph.js";
import { useRef, useEffect } from "preact/hooks";
import ky from "ky";
import {
  Attributes,
  Component,
  ComponentChild,
  ComponentChildren,
  Ref,
} from "preact";
import { type Message } from "~/core/chat/index.ts";
import MessagesList from "~/components/MessagesList.tsx";
import { io } from "socket.io-client"

interface Props {
  roomId: string;
}
const connect = async (options: { roomId: string }) => {
  const { roomId } = options;

  const res = await fetch("/socket/comet", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      room: roomId,
    }),
  });
  if (res.status !== 200) {
    // Error
    return { error: "error" };
  }
  // OK
  return {
    data: await res.json(),
  };
};
async function* getMessages(options: { roomId: string }) {
  while (true) {
    const result = await connect({
      roomId: options.roomId,
    });
    if (result.error) {
      continue;
    }
    yield result;
  }
}
export default class extends Component {
  state: Readonly<{
    messages: Message[];
    socket: any;
  }>;
  byProps: Props;
  constructor(props: Props) {
    super();
    this.state = {
      messages: [],
      socket: {},
    };
    this.byProps = props;
  }
  render(
    props?:
      | Readonly<
        Attributes & {
          children?: ComponentChildren;
          ref?: Ref<any> | undefined;
        }
      >
      | undefined,
    state?: Readonly<{}> | undefined,
    context?: any,
  ): ComponentChild {
    const inp = useRef<HTMLInputElement>(null);

    useEffect(()=>{
      this.init()
    }, [])

    return (
      <>
        <div className="flex pl-4 py-2">
          <input
            ref={inp}
            placeholder="message"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button
            onClick={() => {
              if (inp.current?.value === "") {
                alert(
                  "送信できませんでした。 送信内容が空の可能性が有ります。",
                );
                return;
              }
              ky.post("/socket/comet", {
                json: {
                  room: this.byProps.roomId,
                  message: inp.current?.value,
                },
              });
              this.state.socket.emit("message", {
                message: inp.current?.value,
              })
              if(inp.current){
                // 文字の消去
                inp.current.value = "";
              }
            }}
            class="mx-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          >
            Send
          </button>
        </div>
        <div className="h-5/6 overflow-y-scroll">
          <div
            key="join"
            className="block w-full my-4 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <p className="mb-2 font-bold tracking-tight text-gray-800 dark:text-white break-words text-center">
              - - - - Join - - - -
            </p>
          </div>
          <MessagesList messages={this.state.messages} />
        </div>
      </>
    );
  }
  init(){
    this.setState({
      socket: window.socket,
    })
    try{
      alert(1)
      alert(0)
      alert(this.state.socket.on("message", data => {
        alert(JSON.stringify(data))
      }))
    }catch(e){   
      document.body.innerHTML = `${e.name}: ${e.message}\n\n${e.stack}`.replaceAll("\n", "<br>")
    }
  }
  componentDidMount(): void {
    (async () => {
      for await (
        const message of getMessages({ roomId: this.byProps.roomId })
      ) {
        this.setState({
          messages: [...this.state.messages, message.data.message],
        });
      }
    })();
  }
}
