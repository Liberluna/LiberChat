import { PageProps } from "$fresh/server.ts"
import Room from "~/islands/Room.tsx"
export default function (props: PageProps) {
  const { roomid } = props.params

  return <>
    <div className="bg-gray-800 w-full h-screen">
      <Room roomId={roomid} />
    </div>
  </>
}
