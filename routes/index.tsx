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
        <img
          src="https://raw.githubusercontent.com/Liberluna/LiberChat/main/assets/concept.svg"
          alt="Logo"
          className="h-20"
        />
        <div className="text-center mt-8">LiberChatへようこそ！</div>
        <div className="text-center">
          LiberChatはオープンソースのリアルタイムチャットサービスです。
        </div>
        <div className="text-center">
          <a href="https://github.com/Liberluna/" className="underline">
            Liberluna
          </a>
          により開発されています。
        </div>
        <div className="text-center mt-5">
          <Join />
        </div>
      </Layout>
    </>
  );
}
