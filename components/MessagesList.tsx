import { format } from "date-fns";

import EasyHash from "easyhash";

import { DoNotUseWords, SysMsg } from "./config/disabled.ts";

import { Message } from "~/core/chat/index.ts";

export interface Props {
  messages: Message[];
  reply: (message: string) => void;
}

export default function MessageList(props: Props) {
  return (
    <div>
      {props.messages.map((message, index) => {
        const dateText = format(message.date, "HH:mm:ss yyyy/MM/dd");

        if (message.type === "enter") {
          return (
            <div className="text-center bg-slate-500 text-white rounded-lg drop-shadow-lg">
              <span className="mx-2">{dateText}</span>

              <span className="mx-2">{message.user}</span>

              <span className="mx-2">が入室しました。</span>
            </div>
          );
        }

        if (DoNotUseWords.includes(message.body)) {
          for (let i = 0; i < DoNotUseWords.length; i++) {
            message.body = message.body.replaceAll(DoNotUseWords[i], SysMsg);
          }
        }

        let MsgTripID = EasyHash(message.user + message.body + message.trip);

        MsgTripID = MsgTripID + "00000000";

        MsgTripID = MsgTripID.substring(2, 10);

        const regex = />>(\d{8})/g;

        message.body = message.body.replace(regex, (match, p1) => {
          return `<a class="text-blue-500 hover:underline hover:text-blue-700 pointer" href="#${p1}">${match}</a>`;
        });

        return (
          <div
            key={index}
            id={MsgTripID}
            className="block w-full my-4 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <div className="mb-2 tracking-tight text-gray-600 dark:text-white flex gap-4">
              <span>{message.user}</span>

              <span>{dateText}</span>

              <button onClick={() => props.reply(MsgTripID)}>Reply</button>

              <span className="mx-2">ID : {MsgTripID}</span>
            </div>

            <p
              className="mb-2 font-bold tracking-tight text-gray-800 dark:text-white break-words"
              dangerouslySetInnerHTML={{ __html: message.body }}
            ></p>
          </div>
        );
      })}
    </div>
  );
}
