//管理者機能
import { Head } from "$fresh/runtime.ts";
import DevTools from "../islands/DevTools.tsx";

export default function DevPage() {
  //パスワード機能 伏字管理 ログ 任意
  return (
    <>
      <Head>
        <title>LiberChat Dev</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="bg-gray-800 h-screen text-white">
        <h1 className="text-2xl font-bold mb-4 text-center">AdminPage</h1>
        <hr />
        <DevTools />
      </div>
    </>
  );
}
