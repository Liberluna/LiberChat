import Logo from "./Logo.tsx"

export default function () {
  return <header className="sticky bg-slate-50  dark:bg-gray-800 top-0 w-full drop-shadow-lg opacity-75">
    <div className="flex flex-wrap">
      <div>
        <Logo width="200" height="any"/>
      </div>
    </div>
  </header>
}
