import { type Message } from "~/core/chat/index.ts";
import * as dateFns from "date-fns";
import { DoNotUseWords, SysMsg } from "./config/disabled.ts";
import EasyHash from "easyhash";

export interface Props {
  messages: Message[];
  onRes: any;
}

export default function MessageList(props: Props) {

  return (
    <div>
      {props.messages.map((message, index) => {
        const dateText = dateFns.format(message.date, "HH:mm:ss yyyy/MM/dd");
        if (!message.trip) {
          message.trip = "存在しません。";
        }
        let MsgTripID = EasyHash(message.user + message.body + message.trip); // 識別ID ここ消さんでな リプライ用
        // 2~9文字目まで
        MsgTripID = MsgTripID + "000000000";
        MsgTripID = MsgTripID.substring(2, 10);
        if (DoNotUseWords.includes(message.body)) {
          for (let i = 0; i < DoNotUseWords.length; i++) {
            message.body = message.body.replaceAll(DoNotUseWords[i], SysMsg);
          }
        }

        function res(MsgTripID: string): void {
          console.log("res :" + MsgTripID);
          // 親へ送る
          props.onRes(MsgTripID);
        }

        const regex = />>(\d{8})/g;
        const bodyWithLinks = message.body.replace(regex, (match, p1) => {
          return `<a class="text-blue-500 hover:underline hover:text-blue-700 pointer" href="#${p1}">${match}</a>`; //ここをhoverしたときに idが{p1}の要素のクラスにfocusを付けたい 
        });

        return (
          <div
            key={index}
            id={MsgTripID} // #で飛ぶ
            className="block w-full my-4 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <div className="mb-2 tracking-tight text-gray-600 dark:text-white flex gap-4">
              <span>{message.user}</span>
              <span>{dateText}</span>
              <button className="underline" onClick={() => res(MsgTripID)}>
                 [ Reply ] 
              </button> 
              ID : { MsgTripID }
            </div>
            <p
              className="mb-2 font-bold tracking-tight text-gray-800 dark:text-white break-words"
              dangerouslySetInnerHTML={{ __html: bodyWithLinks }}
            ></p>
          </div>
        );
      })}
    </div>
  );
}
