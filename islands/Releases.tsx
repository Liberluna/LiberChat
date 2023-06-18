import { useState, useEffect } from "preact/hooks"
import Markdown from "~/components/Markdown.tsx"
import {
  IconTag,
} from "tabler-icons"

interface Release {
  name: string
  body: string
  html_url: string
  tag_name: string
}
export default function () {
  const [ releases, setReleases ] = useState(["Now loding..."])
  
  useEffect(()=>{
    (async()=>{
      const releaseRes: Response = await fetch("https://api.github.com/repos/liberluna/liberchat/releases")
      const json = await releaseRes.json()
      if(!Array.isArray(json)){
        alert("Error. リリースの取得に失敗しました。")
      }
      setReleases(json.reverse())
    })()
  }, [])
  return <>
    {
      releases.map((release: Release | string)=>{
        if(typeof release === "string"){
          // Now loding
          return <p>{ release }</p>
        }
        let { name, body, html_url, tag_name } = release
        body = body.replaceAll("\r\n", "\n")
        body = body.replace(/@[a-zA-z0-9]+/g, (user: string)=>{
          return `[${user}](https://github.com/${user.slice(1)})`
        })
        body = body.replaceAll(/## /g, "### ")
        body = body.replace(/https:\/\/github.com\/Liberluna\/LiberChat\/pull\/[0-9]+/g, (url: string)=>{
          const num = url.match(/[0-9]+/)
          return `[#${num}](${url})`
        })
        return <div class="border p-5 m-10 rounded">
          <div class="text-3xl underline">
            <a href={html_url}>
              <span>{ name }</span>
              <span>
                <IconTag />
                { tag_name }
              </span>
            </a>
          </div>
          <div>
            <Markdown>{ body }</Markdown>
          </div>
        </div>
      })
    }
  </>
}