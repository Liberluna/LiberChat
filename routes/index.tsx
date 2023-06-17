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
      </Head>
      <Layout>
        <div className="mx-auto text-center">
          <div>
            <img
              src="https://raw.githubusercontent.com/Liberluna/LiberChat/main/assets/concept.svg"
              alt="Logo"
              height="150"
              className="h-80 mx-auto text-center"
            />
          </div>
          <div>LiberChat 0.1.0 Alpha</div>
          <div>
            <div className="text-2xl">About</div>
            <div>LiberChatは、自由で開かれたチャットサイトです。</div>
            <div>
              13歳未満使用禁止、16歳未満使用禁止、、、<br />
              ネット上のサイトには、さまざまな年齢制限があります。
              しかし、LiberChatには年齢制限はありません。
              誰でも、年齢性別関係なく、公平に話せるチャットサイトです。
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <Join />
        </div>
      </Layout>
    </>
  );
}
