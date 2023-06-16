import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Join() {
  const [room, setRoom] = useState("");
  const history = useHistory();

  const join = () => {
    history.push("/room/" + room); ///room/valに飛ぶ
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
        onChange={(e) => setRoom(e.target.value)}　
      />
      <button onClick={join} className="border">
        Join
      </button>
    </div>
  );
}
