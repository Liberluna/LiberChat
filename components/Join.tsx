import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function () {
  const [room, setRoom] = useState("");
  const history = useHistory();

  const join = () => {
    history.push("/room/" + room);
  };
  
  const changeVal = (e) => setRoom(e.target.value);

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
        onChange={changeVal}
      />
      <button onClick={join} className="border">
        Join
      </button>
    </div>
  );
}
