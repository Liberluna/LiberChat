import Markdown from "~/components/Markdown.tsx"
import { Head } from "$fresh/runtime.ts"
import Releases from "~/islands/Releases.tsx"

export default function () {
  return <>
    <Head>
      <title>Liberchat</title>
      <meta name="description" content="LiberChat : 更新不要なリアルタイムチャットを最高峰のUI/UXで、Liberlunaが提供します。" />
    </Head>
    <div>
      <Releases />
    </div>
    <Markdown>{`# Updates
LiberChatのアップデート
### v0.1.0 alpha-1 (2026-06-16) Hydrogen
チャット機能の追加。
### v0.1.1 alpha-2 (2026-06-17) 
簡易的なユーザーネーム機能 大幅なUI改善 伏字機能 fix etc
    `}</Markdown>
  </>
}
