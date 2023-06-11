import { Head, Link } from "aleph/react"

export default function () {
  return <>
    <Head>
      <title>LiberChat</title>
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
