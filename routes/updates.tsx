import Markdown from "~/components/Markdown.tsx"
import { Head } from "$fresh/runtime.ts"

export default function () {
  return <>
    <Head>
      <title>Liberchat</title>
      <meta name="description" content="LiberChat : 更新不要なリアルタイムチャットを最高峰のUI/UXで、Liberlunaが提供します。" />
    </Head>
    <Markdown>{`# Updates
LiberChatのアップデート
### v0.1.0 alpha-1 (2026-06-16) Hydrogen
チャット機能の追加。
    `}</Markdown>
  </>
}
