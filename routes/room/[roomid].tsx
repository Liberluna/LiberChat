import { PageProps } from "$fresh/server.ts"
import Room from "~/islands/Room.tsx"
export default function (props: PageProps) {
  const { roomid } = props.params

  return <>
    <div className="bg-blue-200">
      <Room roomId={roomid} />
    </div>
  </>
}
