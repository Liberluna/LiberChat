import { Head } from "$fresh/runtime.ts"

export default function () {

  const join = () => {
    let room = document.getElementById("room").velue;
    location.href = "https://liberchat.deno.dev/room/" + room;
  }

  return <>
    <Head>
      <title>Liberchat</title>
      <meta name="description" content="LiberChat : 更新不要なリアルタイムチャットを最高峰のUI/UXで、Liberlunaが提供します。" />
    </Head>
    <div className="mx-10">
      <div className="text-center text-2xl">LiberChat Join Page</div>
      <label for="room">Room</label>
      <input type="text" id="room" placeholder="main">
        <button onClick="join">Join</button>
    </div>
  </>
}
