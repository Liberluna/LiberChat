export default function ({ width, height } : { width: number, height: number, }) {
  return (
    <>
      <a href="/">
        <img src="/logo/light.svg" className="dark:hidden" alt="LiberChat" width={width} height={height}/>
        <img
          src="/logo/dark.svg"
          className="hidden dark:inline"
          alt="LiberChat"
          width={width} height={height}
        />
      </a>
    </>
  );
}
