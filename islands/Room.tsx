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
import { getIO } from "~/core/socketio/io.ts";

interface Props {
  roomId: string;
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
    context?: any
  ): ComponentChild {
    const inp = useRef<HTMLInputElement>(null);

    useEffect(() => {
      this.init();
    }, []);

    //Box取得
    const refBox = useRef<HTMLDivElement>(null);
    function SDOB() {
      const ref = refBox.current;
      if (ref) {
        STOB(ref);
      }
    }
    function STOB(element: HTMLDivElement) {
      element.scrollTop = element.scrollHeight;
    } //一番下までスクロール

    return (
      <>
        <div className="flex pl-4 py-2" ref={refBox}>
          <input
            ref={inp}
            placeholder="message"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button
            onClick={() => {
              if (inp.current?.value === "") {
                alert(
                  "送信できませんでした。 送信内容が空の可能性が有ります。"
                );
                return;
              }
              this.state.socket.emit("message", {
                body: inp.current?.value,
                room: this.byProps.roomId,
              });
              if (inp.current) {
                // 文字の消去
                inp.current.value = "";
              }
            }}
            class="mx-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          >
            Send
          </button>
        </div>
        <div className="h-5/6 overflow-y-scroll" ref={refBox}>
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
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 pl-3 rounded inline-flex items-cente fixed bottom-5 right-5">
          <svg
            class="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
        </button>
      </>
    );
  }
  async init() {
    const io = await getIO();
    const socket = io("https://liberchat-api.nakasyou.repl.co/");

    this.setState({
      socket: socket,
    });

    if (!localStorage.getItem("username")) {
      localStorage.setItem("username", "Anonymous");
    }

    socket.on("message", (data) => {
      this.addMessage({
        user: "@" + "Anonymous",
        type: "text",
        body: data.body,
        room: data.room,
        date: new Date(),
      });
    });

    socket.emit("message", {
      room: this.byProps.roomId,
      type: "enter",
      user: "",
      date: "",
      body: "Join / follow me! https://twitter.com/macl2189",
    }); //これ何・・・
  }
  addMessage(message: Message) {
    this.setState({
      messages: [...this.state.messages, message],
    });
  }
  componentDidMount(): void {}
}
