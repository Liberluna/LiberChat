import { Config } from "~/config/config.ts";

export default function ({ width, height } : { width: string, height: string, }) {

  if (height == "any") {
    height="auto"
  }

  if (width == "any") {
    width="auto"
  }

  return (
    <>
      <a href="/">
        <img src="/logo/light.svg" className="dark:hidden" alt={Config.title} width={width} height={height}/>
        <img
          src="/logo/dark.svg"
          className="hidden dark:inline"
          alt={Config.title}
          width={width} height={height}
        />
      </a>
    </>
  );
}
