import { Context } from "aleph/server"
import * as res from "~/utils/res/index.ts"
import * as chat from "~/system/chat/index.ts"

export function GET (req: Request, ctx: Context) {
  let timeoutId: number | undefined;
  console.log("add conn")
  const stream = new ReadableStream({
    start(controller) {
      timeoutId = setInterval(() => {
        // utf8でエンコード
        const data = new TextEncoder().encode(`data: ${new Date()}\n\n`);
        // 送信
        controller.enqueue(data);
      }, 1000); // 1秒おきに送信
    },
    cancel() {
      // 接続切断時のクリーンアップ
      console.log("cancel")
      clearInterval(timeoutId);
    },
  });
  return new Response(stream, {
    headers: { "Content-Type": "text/event-stream; charset=utf-8" },
  });
}
