import { useState, useEffect } from "preact/hooks"
import Markdown from "~/components/Markdown.tsx"
import {
  IconTag,
} from "tabler-icons"
import { Config } from "~/config/config.ts";


interface Release {
  name: string
  body: string
  html_url: string
  tag_name: string
}
export default function () {
  const [ releases, setReleases ] = useState(["Now loading..."])
  
  useEffect(()=>{
    (async()=>{
      const releaseRes: Response = await fetch("https://api.github.com/repos/liberluna/liberchat/releases")
      const json = await releaseRes.json()
      if(!Array.isArray(json)){
        alert("Error. リリースの取得に失敗しました。")
      }
      setReleases(json)
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
        body = body.replace(/@[a-zA-z0-9\-]+/g, (user: string)=>{
          return `[${user}](https://github.com/${user.slice(1)})`
        })
        body = body.replaceAll(/## /g, "### ")
        body = body.replace(/https:\/\/github.com\/Liberluna\/LiberChat\/pull\/[0-9]+/g, (url: string)=>{
          const num = url.match(/[0-9]+/)
          return `[#${num}](${url})`
        })
        return <div class="border p-5 my-5 mx-2 rounded break-all">
          <div class="text-3xl underline">
            <a href={html_url}>
              <span>{ name }</span>
              <span class="text-xl flex">
                <span><IconTag /></span>
                <span>{ tag_name }</span>
              </span>
            </a>
          </div>
          <div class="break-all">
            <Markdown>{ body }</Markdown>
          </div>
        </div>
      })
    }
  </>
}
