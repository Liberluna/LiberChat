import { useState } from "react"

export default function() {
  const css = `
      .btn:hover {
        animation-name: pop;
        animation-duration: 0.1s;
      }
      @keyframes pop {
        0% {
          transform: scale(1.0);
        }
        40% {
          transform: scale(1.02);
        }
        100% {
          transform: scale(1);
        }
      }
    `
  const [name, setName] = useState("")
  const [roomId, setRoomId] = useState("")
  const intoRoom = () => {
    
    const url = `/chat/room/${roomId}?userName`
    alert(url)
  }
  return <>
    <div className="mx-10">
      <div className="text-center text-2xl">
        ルームに入室しましょう！
      </div>
      <div class="mx-auto">
        <div className="my-5">
          <label>Name: </label>
          <input placeholder="name" className="border" value={name} onInput={(e)=>{
            setRoomId(e.target.value)
          }}/>
        </div>
        <div className="my-5">
          <label>Room id: </label>
          <input placeholder="Room ID" className="border" value={roomId} onInput={(e)=>{
            setRoomId(e.target.value.replaceAll(/[^a-zA-Z0-9]/,"").toLowerCase())
          }} />
        </div>
        <div>
          <button className="btn p-5 text-white bg-dark rd text-xl">入室</button>
        </div>
      </div>
    </div>
    <style>{css}</style>
  </>
}
