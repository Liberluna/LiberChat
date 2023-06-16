import { useRef } from "preact/hooks";

export default function () {
  const inputRef = useRef<HTMLInputElement>(null);

  const join = () => {
    if (inputRef.current == null) {
      alert("Error");
      return 0;
    }
    const id = inputRef.current.value;
    if (id == "" || id == null) {
      //MainRoom
      window.location.href = "https://liberchat.deno.dev/main";
    } else {
      window.location.href = "https://liberchat.deno.dev/room/" + id; //くっつける
    }
  };

  return (
    <div>
      <div className="text-center text-2xl mb-5">LiberChat Join</div>
      <label htmlFor="room" className="border p-1.5">
        RoomID :{" "}
      </label>
      <input type="text" className="border p-1 text-black" placeholder="main" ref={inputRef} />
      <button onClick={join} className="border w-20 p-1">
        Join
      </button>
    </div>
  );
}
