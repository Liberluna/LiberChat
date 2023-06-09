import { PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";
import Logo from "../components/Logo.tsx";

export default function (props: PageProps) {
  return (
    <Layout>
      <div class="text-center text-2xl">404 Not Found</div>
      <div class="text-center text-2xl">
        あれれ? 君が探しているページはこのサーバーになかったようだよ
      </div>
      <div class="text-center text-xl hover:underline mx-5 mt-5 mb-10 cursor-pointer w-full">
        <Logo width="300" height="any" />
      </div>
      <div class="text-center text-xl hover:underline mx-5 mt-5 mb-10 cursor-pointer w-full flex justify-center">
        <div id={"liberad"} data-version={"1.00"} data-token={"net7178140"} className=""></div>
        <script src={"https://liberad.deno.dev/api/LiberAD"}></script>
      </div>
      <div className="text-center" style={{ marginBottom: "30rem" }}>
        URLを間違えていないか確認してみてください。
      </div>
    </Layout>
  );
}
