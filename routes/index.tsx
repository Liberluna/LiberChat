import { Head } from "$fresh/runtime.ts"
import Join from "~/islands/Join.tsx"
import Layout from "~/components/Layout.tsx"

export default function JoinPage() {
  return (
    <>
      <Head>
        <title>Liberchat</title>
        <meta
          name="description"
          content="LiberChat : 更新不要なリアルタイムチャットを最高峰のUI/UXで、Liberlunaが提供します。"
        />
        
        <link rel="manifest" href="manifest.json" />
        <link rel="manifest" href="manifest.webmanifest" />
        <script async src="https://cdn.jsdelivr.net/npm/pwacompat" crossorigin="anonymous"></script>

      </Head>
      <Layout>
        <div className="mx-auto text-center">
          <div>
            <img
              src="https://raw.githubusercontent.com/Liberluna/LiberChat/main/assets/concept.svg"
              alt="Logo"
              height="150"
              className="h-80 mx-auto text-center mt-10 mb-5"
            />
          </div>
          <div className="leading-loose">LiberChat 0.1.0 Alpha</div>
          <div>
            <div className="text-2xl">About</div>
            <div>LiberChatは、どこよりも自由なチャットサイトです。</div>
            <div>
              13歳未満使用禁止、16歳未満使用禁止...<br />
              ネット上のサイトには、さまざまな年齢制限があります。
              しかし、LiberChatには*年齢制限*はありません。
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <div className="text-2xl">さあ！始めよう！</div>
          <Join />
          <div>Room IDを入力してください。同じRoom IDの人と話すことができます。何も入力しないで送信することでメインの部屋に入れます。</div>
        </div>
      </Layout>
    </>
  );
}
