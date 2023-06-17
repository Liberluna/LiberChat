import Header from "./Header.tsx"
import Footer from "./Footer.tsx"

export default function (props) {
  
    const css = `
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background-color: #333;
  border-radius: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 8px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #aaa;
}

::-webkit-scrollbar-corner {
  background-color: #333;
  border-radius: 8px;
  opacity: 0.8;
}

::-webkit-scrollbar-resizer {
  background-color: #333;
  border-radius: 8px;
  opacity: 0.8;
}
  `
  
  return <>
    <style>{css}</style>
    <Header />
    <div className="dark:bg-gray-800 dark:text-gray-50">
      <div className="mx-10">
        { props.children }
      </div>
    </div>
    <Footer />
  </>
}
