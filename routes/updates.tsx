import Markdown from "~/components/Markdown.tsx"
import { Head } from "$fresh/runtime.ts"
import Releases from "~/islands/Releases.tsx"
import Layout from "~/components/Layout.tsx"

export default function () {
  return <>
    <Head>
      <title>Liberchat</title>
      <meta name="description" content="LiberChat : 更新不要なリアルタイムチャットを最高峰のUI/UXで、Liberlunaが提供します。" />
    </Head>
    <Layout>
      <Releases />
    </Layout>
  </>
}
