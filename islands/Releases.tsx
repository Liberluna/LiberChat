import { useState, useEffect } from "preact/hooks"

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
        return <p>{JSON.stringify(release)}</p>
      })
    }
  </>
}