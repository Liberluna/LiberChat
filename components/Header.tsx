import Logo from "./Logo.tsx"

export default function () {
  return <header className="sticky top-0 w-full">
    <div className="drop-shadow-lg flex flex-wrap">
      <div>
        <Logo />
      </div>
    </div>
  </header>
}
