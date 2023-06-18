import { useState, useEffect } from "preact/hooks"

export default function () {
  const [ releases, setReleases ] = useState([])

  useEffect(()=>{
    (async()=>{
      setReleases(["a","b"])
    })()
  }, [])
  return <>
    {
      releases.map(release=>{
        return <p>{release}</p>
      })
    }
  </>
}