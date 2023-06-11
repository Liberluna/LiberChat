export default function() {
  return <>
    <div className="mx-10">
      <div className="text-center text-2xl">
        ルームに入室しましょう！
      </div>
      <div>
        <div>
          <label>Name: </label>
          <input placeholder="name" />
        </div>
        <div>
          <label>Room id: </label>
          <input placeholder="Room ID" />
        </div>
      </div>
    </div>
  </>
}
