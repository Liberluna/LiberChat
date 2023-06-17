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

    const reply = (msg: string): void => {
      console.log("reply");

      if (inp.current == null) {
        return;
      } else {
        console.log("res" + inp.current.value);

        inp.current.value += " >>" + msg + " ";
      }
    };

    function SystemMsg(msg: string): void {
      this.state.socket.emit("message", {
        room: this.byProps.roomId,

        type: "system",

        body: msg, //退室
      });
    }

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
                  "送信できませんでした。 送信内容が空の可能性が有ります。"
                );

                return;
              }

              this.state.socket.emit("message", {
                body: inp.current?.value,

                room: this.byProps.roomId,

                trip: Math.random().toString(), //trip
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

          <MessagesList messages={this.state.messages} reply={reply} />
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
            this.state.socket.emit("message", {
              room: this.byProps.roomId,

              type: "exit",

              body: "@Anonymous" + "が退出しました。", //退室
            });

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

      safeData.user = "@" + "Anonymous";

      safeData.type = ["text", "enter", "exit", "system"].includes(data.type)
        ? data.type
        : "text";

      safeData.body = data.body ? data.body : "";

      safeData.room = data.room;

      safeData.date = new Date()
        ? new Date()
        : "Sat Jun 1 2023 20:40:20 GMT+0900 (日本標準時)";

      safeData.trip = data.trip ? data.trip : 0.114514;

      safeData.processed = data.processed ? data.processed : false;

      safeData.hashtrip = data.hashtrip ? data.hashtrip : false; //hashtripが存在するか

      this.addMessage(safeData);
    });

    socket.emit("message", {
      room: this.byProps.roomId,

      type: "enter",

      body: "@Anonymous" + "が入室しました。",
    });
  }

  addMessage(message: Message) {
    this.setState({
      messages: [...this.state.messages, message],
    });
  }

  componentDidMount(): void {}
}
