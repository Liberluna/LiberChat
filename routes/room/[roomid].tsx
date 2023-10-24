import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Room from "~/islands/Room.tsx";
import { Config } from "~/config/config.ts";

export default function (props: PageProps) {
  const { roomid } = props.params;
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
body{
  width: 100%;
  height: 100%;
}
  `;
  return (
    <>
      <Head>
        <title>
          Room : {roomid} | {Config.title}{" "}
        </title>
        <meta
          name="description"
          content={
            Config.title +
            " : 更新不要なリアルタイムチャットを最高峰のUI/UXで、Liberlunaが提供します。"
          }
        />
        <style>{css}</style>
        {/*<script src="https://cdn.socket.io/socket.io-2.3.0.js"></script>
      <script src="/socket-init.js"></script>*/}
      </Head>
      <div className="bg-white dark:bg-gray-800 w-full h-full">
        <Room roomId={roomid} />
      </div>
    </>
  );
}
