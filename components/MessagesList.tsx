import { type Message } from "~/core/chat/index.ts"

export interface Props {
  messages: Message[]
}

export default function MessageList(props: Props) {
  const max = 200 //max
  const username = "名無しのLiberさん" //ユーザーネーム機能を付けるまでの暫定 
  const date = "x/x/x/xx:xx"; //暫定時間
  //名前・時間はmessageにobjectとして
  
  return (
    <div>
      {props.messages.map((message, index) => (
        <div
          key={index} 
          className="block w-full my-4 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="mb-2 tracking-tight text-gray-600 dark:text-white">{message.user} {date}</div>
          <p className="mb-2 font-bold tracking-tight text-gray-800 dark:text-white break-words">
           { message.body }
          </p>
        </div>
      ))}
    </div>
  );
}
