import { type Message } from "~/core/chat/index.ts"

export interface Props {
  messages: Message[]
}

export default function(props: Props){
  return props.messages.map((message) => {
    return <>
      <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <p class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{message}</p>
      </div>
    </>
  })
}
