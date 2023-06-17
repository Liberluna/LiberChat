import { type Message } from "~/core/chat/index.ts";
import * as dateFns from "date-fns";
import { DoNotUseWords, SysMsg }  from "./config/disabled.ts";
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
        let MsgTripID = EasyHash(message.user + message.body + message.trip); //識別ID  ここ消さんでな リプライ用
        //2~10文字目まで
        MsgTripID = MsgTripID + "0000000000" + message.user + message.body + message.trip;
        //MsgTripID = MsgTripID.substring(2, 10);
        if (DoNotUseWords.includes(message.body)) {
          for (let i = 0; i < DoNotUseWords.length; i++) {
            message.body = message.body.replaceAll(DoNotUseWords[i], SysMsg);
          }
        }

        function res(MsgTripID: string):void {
          console.log("res :" + MsgTripID);
          //親へ送る
          props.onRes(MsgTripID);
        }
      

        return (
          <div
            key={index}
            msg-trip={MsgTripID}
            className="block w-full my-4 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <div className="mb-2 tracking-tight text-gray-600 dark:text-white flex gap-4">
              <span>{message.user}</span>
              <span>{dateText}</span>
              <button className="underline" onClick={() => res(MsgTripID)}>リプライボタン テスト機能 後でsvgにする予定</button>
            </div>
            <p className="mb-2 font-bold tracking-tight text-gray-800 dark:text-white break-words">
              {message.body}
            </p>
          </div>
        );
      })}
    </div>
  );
}