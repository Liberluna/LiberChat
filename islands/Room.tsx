import { useRef, useEffect } from "preact/hooks"

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

    const reply = (msg: string): void => {
      if (inp.current == null) {
        return;
      } else {
        inp.current.value += " >>" + msg + " ";
      }
    }
    
    return (
      <>
        <div class="relative w-full h-full">
          <div className="h-[100dvh] overflow-y-scroll" ref={refBox}>
            <MessagesList messages={this.state.messages} reply={reply} />
          </div>
          <div className="flex absolute bottom-0 left-0 right-0">
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
                  uuid: crypto.randomUUID(),
                })
                if (inp.current) {
                  // 文字の消去
                  inp.current.value = ""
                }
              }}
              class="mx-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            >
              Send
            </button>
          </div>
        </div>
        <button
          title="Down"
          onClick={SDOB}
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 pl-4 rounded inline-flex items-cente fixed bottom-5 right-5"
        >
          <svg
            class="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"></path>
          </svg>
        </button>

        <button
          onClick={() => {
            window.location.href = "/";
          }}
          className="font-bold bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded inline-flex items-cente fixed bottom-5 left-0"
        >
          <span>Exit</span>
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
      const safeData = {
        ...data, //エラー抑制
      };

      safeData.user = "Anonymous";
      safeData.type = ["text", "enter", "exit", "system"].includes(data.type)
        ? data.type
        : "text";
      safeData.body = data.body ? data.body : "";
      safeData.room = data.room;
      safeData.date = new Date()
      safeData.uuid = data.uuid ? data.uuid : crypto.randomUUID()

      this.addMessage(safeData);
    });

    socket.emit("message", {
      room: this.byProps.roomId,
      type: "enter",
      body: "",
    });
  }

  addMessage(message: Message) {
    this.setState({
      messages: [...this.state.messages, message],
    });
  }

  componentDidMount(): void {}
}
