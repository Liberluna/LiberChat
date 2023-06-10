export function json(dict: any): Response{
  const json = JSON.stringify(dict)

  return new Response(json, {
    headers: {
      "content-type": "application/json",
    },
  })
}