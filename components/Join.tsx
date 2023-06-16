export default function () {

  const join = () => {
    let room = document.getElementById("room").velue;
    location.href = "https://liberchat.deno.dev/room/" + room;
  }

  return <>
    <div className="mx-10">
      <div className="text-center text-2xl">LiberChat Join</div>
      <label for="room">Room</label>
      <input type="text" id="room" className="border" placeholder="main" />
        <button onClick="join()" className="border">Join</button>
    </div>
  </>
}
