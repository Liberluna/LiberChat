import { Head } from "$fresh/runtime.ts"
import Layout from "~/components/Layout.tsx"
import developers from "~/components/config/developers.ts"

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
        <h1 className="text-4xl font-bold text-center">LiberChat Developers</h1>
        <div className="mt-5 flex flex-col gap-5 md:flex-row md:gap-10">
          {developers.map((dev, index) => (
            <a className="text-center w-30" key={index} href={dev.link}>
              <img src={dev.icon} alt="DevIcon" className="rounded-full w-20 h-20 mt-5 mx-auto" />
              <div className="mt-5 text-xl">{dev.name}</div>
              <div className="mt-2 mb-3 text-sm word-break">{dev.desc}</div>
            </a>
          ))}
        </div>
      </Layout>
    </>
  );
}
