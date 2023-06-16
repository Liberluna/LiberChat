import { useRef } from "preact/hooks";

export default function() {
  const inputRef = useRef<HTMLInputElement>(null);
  
  const join = () => {
    const id = inputRef.current.value;
    if (id == "" || id == null) {
      window.alert("入力値が空の可能性が有ります。") 
    }else {
      window.location.href = "https://liberchat.deno.dev/room/" + id; //くっつける
    }
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
