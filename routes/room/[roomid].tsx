import { PageProps } from "$fresh/server.ts"
import { Head } from "$fresh/runtime.ts"
import Room from "~/islands/Room.tsx"

export default function (props: PageProps) {
  const { roomid } = props.params
  const css = `
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background-color: #333;
  border-radius: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 8px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #aaa;
}

::-webkit-scrollbar-corner {
  background-color: #333;
  border-radius: 8px;
  opacity: 0.8;
}

::-webkit-scrollbar-resizer {
  background-color: #333;
  border-radius: 8px;
  opacity: 0.8;
}
  `
  return <>
    <Head>
      <title>Room : {roomid} | Liberchat </title>
      <meta name="description" content="LiberChat : 更新不要なリアルタイムチャットを最高峰のUI/UXで、Liberlunaが提供します。" />
      <style>
        {css}
      </style>
      <script src="https://liberchat-api.nakasyou.repl.co/socket.io/socket.io.js"></script>
      <script src="/socket-init.js"></script>
    </Head>
    <div className="bg-white dark:bg-gray-800 w-full h-screen overflow-x-hidden">
      <Room roomId={roomid}/>
    </div>
  </>
}
