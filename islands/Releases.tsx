import { useState, useEffect } from "preact/hooks"
import Markdown from "~/components/Markdown.tsx"

export default function () {
  const [ releases, setReleases ] = useState(["Now loding..."])

  useEffect(()=>{
    (async()=>{
      const releaseRes: Respobse = await fetch("https://api.github.com/repos/liberluna/liberchat/releases")
      const json = await releaseRes.json()
      if(!Array.isArray(json)){
        alert("Error. リリースの取得に失敗しました。")
      }
      setReleases(json)
    })()
  }, [])
  return <>
    {
      releases.map(release=>{
        if(typeof release === "string"){
          // Now loding
          return <p>{ release }</p>
        }
        const { name, body } = release

        return <div>
          <h2 class="text-3xl">{ name }</h2>
          <div>
            <Markdown>{ body }</Markdown>
          </div>
        </div>
      })
    }
  </>
}