export function GET () {
  return new Response(`<!doctype HTML>
  <html>
    <head>
    </head>
    <body>
      <h1>SSE TEST</h1>
      <script>
      alert("loaded")
      const sse = new EventSource("/socket/comet")
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
