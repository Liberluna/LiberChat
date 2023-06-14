import { type Message } from "~/core/chat/index.ts"

export interface Props {
  messages: Message[]
}

export default function MessageList(props: Props) {
  return (
    <div>
      {props.messages.map((message, index) => (
        <div
          msg={index}
          className="block w-full max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <p className="mb-2 font-bold tracking-tight text-gray-600 dark:text-white">
            {message}
          </p>
        </div>
      ))}
    </div>
  );
}
