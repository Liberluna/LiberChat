import { useRef, useEffect, useState } from "preact/hooks";
import {
  IconSend,
  IconLogout,
  IconMenu2,
  IconX,
  IconArrowDown,
} from "tabler-icons";

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
  roomId: string | null;
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

    const reply = (msg: string): void => {
      if (inp.current == null) {
        return;
      } else {
        inp.current.value += " >>" + msg + " ";
      }
    };
    const [canSubmit, setCanSubmit] = useState(false); // 送信可能か
    const sendMessage = (): void => {
      if (!inp.current?.value) {
        return;
      }
      this.state.socket.emit("message", {
        body: inp.current?.value,
        room: this.byProps.roomId,
        uuid: crypto.randomUUID(),
      });
      if (inp.current) {
        // 文字の消去
        inp.current.value = "";
      }
      setCanSubmit(false);
    };
    const [isOpenMenu, setIsOpenMenu] = useState(false); // メニューがオンか

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
        <div class="relative w-full h-screen overflow-y-scroll" ref={refBox}>
          <div className="top-0 left-0 right-0 min-h-screen">
            <MessagesList messages={this.state.messages} reply={reply} />
          </div>
          <div className="flex sticky bottom-0 left-0 right-0">
            <input
              ref={inp}
              placeholder="message"
              onKeyDown={(e) => {
                if (e.key.toLowerCase() === "enter") {
                  // Enter
                  sendMessage();
                }
              }}
              onInput={(e) => {
                setCanSubmit(e.target.value !== "");
              }}
              class="ml-5 mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-400 dark:focus:border-blue-500"
            />

            <button
              onClick={() => {
                sendMessage();
              }}
              class="mx-5 mb-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
              disabled={!canSubmit}
              style={{
                opacity: canSubmit ? 1 : 0.5,
              }}
            >
              <IconSend />
            </button>
            <div>
              <div hidden={!isOpenMenu}>
                <div class="absolute bottom-20 right-0 gap-2 grid grid-rows-3 justify-items-center">
                  <button
                    class="p-3 bg-red-400 text-center rounded-full drop-shadow-lg"
                    onClick={() => {
                      setIsOpenMenu(false);
                    }}
                  >
                    <IconX />
                  </button>
                  <button
                    onClick={() => {
                      if (window.confirm("退出しますか？"))
                        window.location.href = "/";
                    }}
                    class="text-center bg-cyan-300 p-2 rounded-full drop-shadow-lg w-12 h-12"
                  >
                    <IconLogout />
                  </button>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsOpenMenu(!isOpenMenu);
                }}
                class="mb-5 bg-gray-300 hover:bg-gray-400 rounded text-center p-3"
              >
                <IconMenu2 />
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={SDOB}
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold p-2.5 rounded-full inline-flex items-center fixed bottom-20 right-3 justify-items-center text-center"
        >
          <IconArrowDown />
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
      safeData.room = data.room ? data.room : this.byProps.roomId;
      safeData.date = new Date();
      safeData.uuid = data.uuid ? data.uuid : crypto.randomUUID();

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
