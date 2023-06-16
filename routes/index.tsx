import { Head } from "$fresh/runtime.ts";
import Join from "~/islands/Join.tsx";

export default function JoinPage() {
  return (
    <>
      <Head>
        <title>Liberchat</title>
        <meta
          name="description"
          content="LiberChat : 更新不要なリアルタイムチャットを最高峰のUI/UXで、Liberlunaが提供します。"
        />
      </Head>
      <div className="mx-10 my-5 dark:bg-gray-100">
        <img alt="LiberChat" src="https://raw.githubusercontent.com/Liberluna/LiberChat/main/assets/concept.svg" className="mx-auto text-center"/>
        <div className="text-center text-2xl">LiberChat</div>
        <div>LiberChatへようこそ！</div>
        <div>LiberChatは、オープンソースのオンラインチャットサービスです。</div>
        <div>
          <div>さあ！始めよう！</div>
        </div>
        <Join />
      </div>
    </>
  );
}
