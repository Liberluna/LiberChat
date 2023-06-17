import Logo from "./Logo.tsx"

export default function () {
  return <header className="sticky top-0 w-full">
    <div className="drop-shadow-lg flex flex-wrap">
      <div>
        <Logo />
        <img src="https://raw.githubusercontent.com/Liberluna/LiberChat/main/assets/logo.svg" alt="LiberChat" className="h-10" />
      </div>
    </div>
  </header>
}
