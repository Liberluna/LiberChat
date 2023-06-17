export default function () {
  return (
    <>
      <a href="/">
        <img src="/logo/light.svg" className="dark:hidden" alt="LiberChat" />
        <img
          src="/logo/dark.svg"
          className="hidden dark:inline"
          alt="LiberChat"
        />
      </a>
    </>
  );
}
