import React, { useState } from "react";

export default function Join() {
const [room, setRoom] = useState("");

const join = () => {
window.location.href = "https://liberchat.deno.dev/room/" + room;
};

const handleChange = (e) => {
setRoom(e.target.value);
};

return (
<div className="mx-10">
<div className="text-center text-2xl">LiberChat Join</div>
<label htmlFor="room">Room</label>
<input
     type="text"
     id="room"
     className="border"
     placeholder="main"
     value={room}
     onChange={handleChange}
   />
<button onClick={join} className="border">
Join
</button>
</div>
);
}




