import { PageProps } from "$fresh/server.ts"
import { Head } from "$fresh/runtime.ts"
import Room from "~/islands/Room.tsx"
export default function (props: PageProps) {
  const { roomid } = props.params

  return <>
    <Head>
      <title>Room : {roomid} | Liberchat </title>
      <meta name="description" content="LiberChat : 更新不要なリアルタイムチャットを最高峰のUI/UXで、Liberlunaが提供します。" />
      <link rel="icon" href="/static/logo.svg" />
    </Head>
    <div className="bg-white dark:bg-gray-800 w-full h-screen overflow-x-hidden">
      <Room roomId={roomid}/>
    </div>
  </>
}
