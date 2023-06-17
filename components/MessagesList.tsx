import { type Message } from "~/core/chat/index.ts";
import * as dateFns from "date-fns";
import { DoNotUseWords, SysMsg }  from "./config/disabled.ts";
import EasyHash from "easyhash";

export interface Props {
  messages: Message[];
}

export default function MessageList(props: Props) { 
  return (
    <div>
      {
        props.messages.map((message, index) => {
          const dateText = dateFns.format(message.date, "HH:mm:ss yyyy/MM/dd");

          if(message.type === "enter"){
            // 誰かが入室
            return <div class="text-center bg-slate-500 text-white rounded-lg drop-shadow-lg">
              <span class="mx-2">{ dateText }</span>
              <span class="mx-2">@{ message.user }</span>
              <span class="mx-2">が入室しました。</span>
            </div>
          }
          
          const MsgTripID = EasyHash(message.date + message.user + message.body); //識別ID  ここ消さんでな リプライ用
          return <div
              key={index}
              msg-trip={MsgTripID}
              className="block w-full my-4 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <div className="mb-2 tracking-tight text-gray-600 dark:text-white flex gap-4">
                <span>{message.user}</span>
                <span>{dateText}</span>
              </div>
              <p className="mb-2 font-bold tracking-tight text-gray-800 dark:text-white break-words">
                {message.body}
              </p>
            </div>
        })
      }
    </div>
  );
}
