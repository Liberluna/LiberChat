import { Head } from "aleph/react"
//import { useState } from "react"


const click = () => {
  alert(0)
}
async function comet() {
  const res = await fetch("/socket/comet")

  if(res.status !== 200){
    comet()
    return
  }

  const json = await res.json()
  console.log(json)
}
export default function () {

  
  return <>
    <Head>
      <title>LiberChat</title>
    </Head>
    <div>Liberchat</div>
    <button onClick={click}>a</button>
  </>
}
