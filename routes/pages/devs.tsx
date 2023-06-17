import { Head } from "$fresh/runtime.ts"
import Layout from "~/components/Layout.tsx"
import Devs from "~/components/configs/developer.ts"

export default function DevPage() {
  return (
    <>
      <Head>
        <title>Liberchat Developer</title>
        <meta
          name="description"
          content="LiberChat : 更新不要なリアルタイムチャットを最高峰のUI/UXで、Liberlunaが提供します。"
        />
      </Head>
      <Layout>
        <h1>LiberChat Developers</h1>
        <div className="mt-5 flex flex-col gap-5 md:flex-row md:gap-10">
          <div>
            <img src="https://avatars.githubusercontent.com/u/121654029" alt="DevIcon" />
            <div>
              Name
            </div>
            <div className="">
              Description
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
