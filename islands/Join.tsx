import { useRef } from "preact/hooks";

export default function() {
  const inputRef = useRef<HTMLInputElement>(null);
  const join = () => {
    window.location.href = "https://liberchat.deno.dev/room/" + inputRef.current.value; //くっつける
  }
     
     return (
          <div>
               <div className="text-center text-2xl">LiberChat Join</div>
               <label htmlFor="room">Room</label>
               <input
                    type="text"
                    className="border"
                    placeholder="main"
                    ref={inputRef}
               />
               <button onClick={join} className="border">
                    Join
               </button>
          </div>
          );
     }
