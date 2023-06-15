import { type Message } from "~/core/chat/index.ts"

export interface Props {
  messages: Message[]
}

export default function MessageList(props: Props) {
  const max = 200
  const username = "名無しのLiberさん"
  const date = Date.now()
  
  return (
    <div>
      {props.messages.map((message, index) => (
        <div
          key={index} 
          className="block w-full my-4 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="mb-2 tracking-tight text-gray-600 dark:text-white">{username}&nsbp;&nsbp;&nsbp;{date}</div>
          <p className="mb-2 font-bold tracking-tight text-gray-800 dark:text-white break-words">
            {message.length > max ? message.slice(max) + "..." : message}
          </p>
        </div>
      ))}
    </div>
  );
}
