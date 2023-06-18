import { useRef } from "preact/hooks";

export default function () {
  const inputRef = useRef<HTMLInputElement>(null);

  const join = () => {
    if (inputRef.current == null) {
      alert("Error");

      return 0;
    }

    const id = inputRef.current.value;

    if (id == "" || id == " ") {
      window.location.href = "/room/main";
    } else {
      window.location.href = "/room/" + id;
    }

    window.location.href = "/room/main";
  };

  return (
    <div>
      <div className="text-center text-2xl mb-5">Join the LiberChat!</div>

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
