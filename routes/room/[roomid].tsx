import { PageProps } from "$fresh/server.ts"
import { Head } from "$fresh/runtime.ts"
import Room from "~/islands/Room.tsx"
export default function (props: PageProps) {
  const { roomid } = props.params

  return <>
    <Head>
      <title>Room : {roomid} | Liberchat </title>
      <meta name="description" content="LiberChat : 更新不要なリアルタイムチャットを最高峰のUI/UXで、Liberlunaが提供します。" />
      <style scroll>
         ::-webkit-scrollbar-track {
            background-color: #f1f1f1;
         }

         ::-webkit-scrollbar-thumb {
            background-color: #888;
       　}

         ::-webkit-scrollbar-thumb:hover {
            background-color: #555;
         }

         ::-webkit-scrollbar-corner {
            background-color: #f1f1f1;
         }

         ::-webkit-scrollbar-resizer {
            background-color: #f1f1f1;
         }
      </style>
    </Head>
    <div className="bg-white dark:bg-gray-800 w-full h-screen overflow-x-hidden">
      <Room roomId={roomid}/>
    </div>
  </>
}
