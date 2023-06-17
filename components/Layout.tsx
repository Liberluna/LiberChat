import Header from "./Header.tsx"

export default function (props) {
  return <>
    <Header />
    <div className="dark:bg-gray-800 dark:text-gray-50">
      <div className="mx-10">
        { props.children }
      </div>
    </div>
  </>
}
