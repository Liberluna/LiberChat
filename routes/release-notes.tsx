import Markdown from "~/components/Markdown.tsx";
import { Head } from "$fresh/runtime.ts";
import Releases from "~/islands/Releases.tsx";
import Layout from "~/components/Layout.tsx";
import { Config } from "~/config/config.ts";

export default function () {
  return (
    <>
      <Head>
        <title>Release Notes | {Config.title}</title>
        <meta
          name="description"
          content={Config.title + "の歴史を紹介します。"}
        />
      </Head>
      <Layout>
        <div class="text-3xl">Release Notes</div>
        <Releases />
      </Layout>
    </>
  );
}
