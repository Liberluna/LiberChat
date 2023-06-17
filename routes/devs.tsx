import { Head } from "$fresh/runtime.ts";
import Layout from "~/components/Layout.tsx";
import Devs from "~/components/config/developer.ts";

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
        <h1 className="text-4xl font-bold">LiberChat Developers</h1>
        <div className="mt-5 flex flex-col gap-5 md:flex-row md:gap-10">
          <div className="text-center w-30">
            <img
              src="https://avatars.githubusercontent.com/u/121654029"
              alt="DevIcon"
              className="rounded-full w-20 h-20 mt-5 mx-auto"
            />
            <div className="mt-5 text-xl">Name</div>
            <div className="mt-2 text-sm word-break">Description</div>
          </div>
        </div>
      </Layout>
    </>
  );
}
