import Logo from "./Logo.tsx"

export default function () {
  //見栄えをどうにかしてくれ・・・
  return <header className="sticky bg-slate-50  dark:bg-emerald-950 top-0 w-full">
    <div className="drop-shadow-lg flex flex-wrap">
      <div>
        <Logo />
      </div>
    </div>
  </header>
}
