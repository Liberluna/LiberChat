import { useState, useRef } from "preact/hooks";
import Hash from "hash";
import { getIO } from "~/core/socketio/io.ts";
import { isLeapYear } from "https://esm.sh/date-fns@2.30.0";

export default function DevTools() {
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null);

  const UA = navigator.userAgent;

  const handleSubmit = (event: Event) => {
    event.preventDefault();

    if (Hash(Hash(password)) === Hash("73192401" + "4")) {
      //後でsha256
      setLoginStatus("success");
    } else {
      setLoginStatus("failed");
    }

    if (!formRef.current) return;
    formRef.current.style.display = "none";
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        ref={formRef}
        class="flex flex-col space-y-4"
      >
        <label class="flex flex-col">
          <span class="text-lg mb-1 font-bold text-center">Password</span>
          <input
            type="password"
            value={password}
            onInput={(event) => {
              const target = event.target as HTMLInputElement;
              setPassword(target.value);
            }}
            class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
          />
        </label>
        <button
          type="submit"
          class="bg-gray-500 text-white rounded-md py-2 px-4 hover:bg-gray-700"
        >
          Login
        </button>
      </form>

      {loginStatus === "success" && (
        <>
          <h2>Status : Login Success</h2>
          <hr />
          <DevTool useragent={UA} />
        </>
      )}

      {loginStatus === "failed" && (
        <>
          <h2 className="text-red-500">Status : Login Failed...</h2>
          <hr />
        </>
      )}
    </>
  );
}

interface Props {
  useragent: string;
}

function DevTool(prop: Props) {
  const UA = prop.useragent;
  if (!UA.includes("Mozilla") || UA.includes("bot")) {
    return (
      <>
        <h2 className="text-red-500">Status : Anomalous traffic detected.</h2>
        <hr />
      </>
    );
  } //総当たりかを簡易検知

  const s = "　";

  return (
    <>
      <div>
        <div className="flex space-x-4 mb-4 py-2 border-b border-gray-300 rounded bg-gray-700 flex-wrap">
          <div className="w-full flex flex-wrap"></div>
          <div className="w-full"></div>
        </div>
      </div>
    </>
  );
}
