import { PageProps } from "$fresh/server.ts"
import { Head } from "$fresh/runtime.ts"
import Room from "~/islands/Room.tsx"
export default function (props: PageProps) {
  const { roomid } = props.params

  return <>
    <Head>
      <title>Liberchat room:{roomid}</title>
    </Head>
    <div className="bg-white dark:bg-gray-800 w-full h-screen overflow-x-hidden">
      <Room roomId={roomid}/>
    </div>
  </>
}
