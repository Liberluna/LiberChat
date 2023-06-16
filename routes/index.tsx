import { Head } from "$fresh/runtime.ts"
import { useState } from "preact/hooks";

export default function () {
  const [room, setRoom] = useState("");

     const join = () => {
          window.location.href = "https://liberchat.deno.dev/room/" + room; //くっつける
          window.console.log(room);
     };

     const handleChange = (e) => {
          setRoom(e.target.value); //roomと同期
     };
     
     window.console.log("Welcome to Liberchat!"); //test
  
  return <>
    <Head>
      <title>Liberchat</title>
      <meta name="description" content="LiberChat : 更新不要なリアルタイムチャットを最高峰のUI/UXで、Liberlunaが提供します。" />
    </Head>
    <div className="mx-10">
      <div className="text-center text-2xl">LiberChat</div>
      <div>LiberChatへようこそ！</div>
      <div>LiberChatは、オープンソースのオンラインチャットサービスです。</div>
      <div>
        <div>さあ！始めよう！</div>
      </div>
      
      <div className="text-center text-2xl">LiberChat Join</div>
      
               <label htmlFor="room">Room</label>
               <input
                    type="text"
                    id="room"
                    className="border"
                    placeholder="main"
                    value={room}
                    onChange={handleChange}
               />
               <button onClick={join} className="border">
                    Join
               </button>
      
    </div>
  </>
}
