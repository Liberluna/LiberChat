import { format } from "date-fns";

import easyHash from "hash";

import { doNotUseWords } from "./config/disabled.ts";
import { type Message } from "~/core/chat/index.ts";
import { maxMessage } from "./config/rule.ts";
import {
  IconCornerDownLeft,
} from "tabler-icons"

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

        if (message.type === "exit") {
          return (
            <div className="text-center bg-slate-500 text-white rounded-lg drop-shadow-lg">
              <span className="mx-2">{dateText}</span>
              <span className="mx-2">{message.user}</span>
              <span className="mx-2">が退室しました。</span>
            </div>
          );
        }

        if (message.type === "system") {
          // システムメッセージの場合
          return (
            <div className="text-center bg-slate-500 text-white rounded-lg drop-shadow-lg">
              <span className="mx-2">System : </span>
              <span className="mx-2">{message.body}</span>
              <span className="mx-2">{dateText}</span>
            </div>
          );
        }

        let messageHtml: string = message.body;

        for (const doNotUseWord of doNotUseWords) {
          messageHtml = messageHtml.replaceAll(doNotUseWord, "***"); // 禁止用語の削除
        }

        const tripId = (
          "00000000" + easyHash(message.user + message.body + message.uuid)
        ) // Hash
          .slice(-9, -1);

        messageHtml = messageHtml.replace(/>>(\d{8})/g, (match, p1) => {
          console.log(match, p1);
          return `<a class="text-blue-500 hover:underline hover:text-blue-700 pointer" href="#${p1}">${match}</a>`;
        });

        return (
          <div
            key={index}
            id={tripId}
            className="block w-full my-4 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <div className="mb-2 tracking-tight text-gray-600 dark:text-white flex gap-4">
              <span>{message.user}</span>
              <span>{dateText}</span>
              <span className="mx-2">ID : {tripId}</span>
              <button
                onClick={() => props.reply(tripId)}
                className="mx-2 filter dark:invert hover:bg-gray-400 w-15 text-center p-1 rounded"
              >
                <IconCornerDownLeft />
              </button>
            </div>
            <p
              className="mb-2 font-bold tracking-tight text-gray-800 dark:text-white break-words"
              dangerouslySetInnerHTML={{
                __html: messageHtml,
              }}
            ></p>
          </div>
        );
      })}
    </div>
  );
}
