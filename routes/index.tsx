import { Head, Link } from "aleph/react"
//import Heads from '../components/Heads.tsx';

export default function () {
  return <>
    <Head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Liberchat</title>
      <meta name="description" content="Liberchat : 更新不要なリアルタイムチャットを最高峰のUI/UXで、Liberlunaが提供します。">
      <link rel="icon" href="/assets/icon.svg">
    </Head>
    <div className="mx-10">
      <div className="text-center text-2xl">LiberChat</div>
      <div>LiberChatへようこそ！</div>
      <div>LiberChatは、オープンソースのチャットサイトです。</div>
      <div>
        <div>さあ！始めよう！</div>
        <div className="text-center mx-auto">
          <Link to="/into" className="rounded-lg drop-shadow-md text-white bg-slate-800">チャット開始！</Link>
        </div>
      </div>
    </div>
  </>
}
