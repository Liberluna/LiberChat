import { Head } from "$fresh/runtime.ts";
import Join from "~/islands/Join.tsx";
import Layout from "~/components/Layout.tsx";
import { Config } from "~/config/config.ts";

export default function JoinPage() {
  return (
    <>
      <Head>
        <title>{Config.title}</title>
        <meta
          name="description"
          content={
            Config.title +
            ": 更新不要なリアルタイムチャットを最高峰のUI/UXで、Liberlunaが提供します。"
          }
        />

        <link rel="manifest" href="manifest.json" />
        <link rel="manifest" href="manifest.webmanifest" />
        <script
          async
          src="https://cdn.jsdelivr.net/npm/pwacompat"
          crossorigin="anonymous"
        ></script>
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
          <div className="leading-loose">{Config.title} 0.1.0 Alpha</div>
          <div>
            <div className="text-2xl">About</div>
            <div>{Config.title}は、どこよりも自由なチャットサイトです。</div>
            <div>
              Liberlunaが贈る、自由なチャットサービス"{Config.title}
              "。どなたでもご利用になれます。
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <div className="text-2xl">さあ！始めよう！</div>
          <Join />
          <div>
            Room IDを入力してください。同じRoom
            IDの人と話すことができます。何も入力しないで送信することでメインの部屋に入れます。
          </div>
        </div>
      </Layout>
    </>
  );
}
