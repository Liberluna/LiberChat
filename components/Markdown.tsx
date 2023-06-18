import * as marked from "marked"
import { type ComponentChildren, } from "preact"
import renderToString from "preact-render-to-string"

interface Props {
  children: ComponentChildren
}
export default function(props: Props) {
  const css = `
  .md h1 {
    font-size: 2em !important;
  }
  
  .md h2 {
    font-size: 1.5em !important;
  }
  
  .md h3 {
    font-size: 1.17em !important;
  }
  
  .md h4 {
    font-size: 1.00em !important;
  }
  
  .md h5 {
    font-size: 0.83em !important;
  }
  .md h6 {
    font-size: 0.67em !important;
  }

  .md a{
    color: blue !important;
    text-decoration-line: underline !important;
  }

  .md ul {
    list-style-type: disc !important;
  }
  .md ol {
    list-style-type: decimal !important;
  }
  `
  
  const text = typeof props.children === "string" ? props.children : renderToString(props.children)
  return (<>
    <style>{css}</style>
    <div dangerouslySetInnerHTML={{
      __html: marked.parse(text),
    }} class="md"></div>
  </>)
}