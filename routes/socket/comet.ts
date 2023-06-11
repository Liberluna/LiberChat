import { Context } from "aleph/server"
import * as res from "~/utils/res/index.ts"
import * as chat from "~/system/chat/index.ts"

export function GET () {
  return new Response(`<!doctype HTML>
  <html>
    <head>
    </head>
    <body>
      <h1>SSE TEST</h1>
      <script>
      alert("loaded")
      const sse = new EventSource()
      sse.addEventListener("message", (e) => {
        alert(e.data)
      });
      </script>
    </body>
  </html>`,{
    headers: {
      "content-type": "text/html"
    }
  })
}
export function POST (req: Request, ctx: Context) {
  let timeoutId: number | undefined;
  const stream = new ReadableStream({
    start(controller) {
      timeoutId = setInterval(() => {
        // utf8でエンコード
        const data = encoder.encode(`data: ${new Date()}\n\n`);
        // 送信
        controller.enqueue(data);
      }, 1000); // 1秒おきに送信
    },
    cancel() {
      // 接続切断時のクリーンアップ
      clearInterval(timeoutId);
    },
  });
  return new Response(stream, {
    headers: { "Content-Type": "text/event-stream; charset=utf-8" },
  });
}
