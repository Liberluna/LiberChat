import { useRef } from "preact/hooks";
import { Config } from "~/config/config.ts";


export default function () {
  const inputRef = useRef<HTMLInputElement>(null);

  const join = () => {
    if (inputRef.current == null) {
      alert("Error");
      throw new Error("input is not exist.")
    }
    const id = inputRef.current.value
    if (id.replace(/ /g,"") === "") {
      window.location.href = "/room/main"
    } else {
      window.location.href = "/room/" + id
    }
  };

  return (
    <div>
      <div className="text-center text-2xl mb-5">Join the {Config.title}!</div>

      <label
        htmlFor="room"
        className="text-black p-1.5 rounded dark:text-white"
      >
        RoomID :
      </label>

      <input
        type="text"
        className="border p-1 text-black"
        placeholder="main"
        ref={inputRef}
      />

      <button
        onClick={join}
        className="text-black border w-20 p-1 rounded hover:bg-gray-400 hover:text-black dark:text-white"
      >
        Join
      </button>
    </div>
  );
}
