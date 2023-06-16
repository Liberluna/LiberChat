import { PageProps } from "$fresh/server.ts";

export default function(props: PageProps) {
  return <div>
    <div class="text-center text-2xl">
      404 Not Found
    </div>
    <div class="text-center text-2xl">
      あれれ? 君が探しているページはこのサーバーになかったようだよ
    </div>
    <div class="text-center">
      URLを間違えていないか確認してみてください。
    </div>
  </div>
}
