import { Head } from "$fresh/runtime.ts"

export default function () {
  return <>
    <Head>
      <title>Liberchat</title>
      <meta name="description" content="LiberChat : 更新不要なリアルタイムチャットを最高峰のUI/UXで、Liberlunaが提供します。" />
      <link rel="icon" href="/static/logo.svg" />
    </Head>
    <div className="mx-10">
      <div className="text-center text-2xl">LiberChat</div>
      <div>LiberChatへようこそ！</div>
      <div>LiberChatは、オープンソースのオンラインチャットサービスです。</div>
      <div>
        <div>さあ！始めよう！</div>
        <div className="text-center mx-auto">
          <a href="/into" className="rounded-lg drop-shadow-md text-white bg-slate-800">チャット開始！</a>
        </div>
      </div>
    </div>
  </>
}
