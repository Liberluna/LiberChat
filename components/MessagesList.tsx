import { format } from "date-fns";

import easyHash from "hash";

import { doNotUseWords } from "./config/disabled.ts";
import { type Message } from "~/core/chat/index.ts";
import { maxMessage } from "./config/rule.ts";

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
              <button onClick={() => props.reply(tripId)} className="mx-2 filter dark:invert">
                <Reply />
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

function Reply() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      width="15px"
      height="80%"
      viewBox="0 0 980.000000 876.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <metadata>
        Created by potrace 1.15, written by Peter Selinger 2001-2017
      </metadata>
      <g
        transform="translate(0.000000,876.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path d="M3039 8737 c-20 -8 -52 -23 -70 -35 -19 -12 -681 -668 -1471 -1459 -1190 -1191 -1442 -1447 -1465 -1493 -24 -48 -28 -66 -27 -145 0 -73 4 -99 23 -140 20 -41 289 -315 1475 -1501 1177 -1177 1460 -1456 1501 -1475 69 -33 217 -35 285 -3 72 34 135 97 172 172 l33 67 3 742 2 743 683 0 c1280 0 1754 -32 2375 -161 477 -99 865 -275 1202 -546 465 -373 734 -931 834 -1733 45 -362 47 -906 4 -1330 -7 -69 -13 -171 -13 -227 0 -113 10 -136 75 -180 39 -27 116 -31 159 -8 48 24 111 105 156 200 190 395 462 1077 578 1445 191 607 255 993 243 1480 -24 1020 -233 1750 -665 2324 -609 807 -1668 1299 -3156 1465 -448 51 -530 54 -1527 58 l-947 5 -3 746 -3 747 -29 58 c-33 65 -102 134 -167 168 -55 28 -203 37 -260 16z" />
      </g>
    </svg>
  );
}
