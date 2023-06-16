import { parseMarkdown } from "markdown-wasm"
import { type ComponentChildren, } from "preact"
import renderToString from "preact-render-to-string"

interface Props {
  children: ComponentChildren
}
export default function(props: Props) {
  const css = `
  .md h1 {
    display: block;
    font-size: 2em;
    font-weight: bold;
    margin-block-start: .67em;
    margin-block-end: .67em;
  }
  
  .md h2,
  :-moz-any(article, aside, nav, section)
  .md h1 {
    display: block;
    font-size: 1.5em;
    font-weight: bold;
    margin-block-start: .83em;
    margin-block-end: .83em;
  }
  
  .md h3,
  :-moz-any(article, aside, nav, section)
  :-moz-any(article, aside, nav, section)
  .md h1 {
    display: block;
    font-size: 1.17em;
    font-weight: bold;
    margin-block-start: 1em;
    margin-block-end: 1em;
  }
  
  .md h4,
  :-moz-any(article, aside, nav, section)
  :-moz-any(article, aside, nav, section)
  :-moz-any(article, aside, nav, section)
  .md h1 {
    display: block;
    font-size: 1.00em;
    font-weight: bold;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
  }
  
  .md h5,
  :-moz-any(article, aside, nav, section)
  :-moz-any(article, aside, nav, section)
  :-moz-any(article, aside, nav, section)
  :-moz-any(article, aside, nav, section)
  .md h1 {
    display: block;
    font-size: 0.83em;
    font-weight: bold;
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
  }
  
  .md h6,
  :-moz-any(article, aside, nav, section)
  :-moz-any(article, aside, nav, section)
  :-moz-any(article, aside, nav, section)
  :-moz-any(article, aside, nav, section)
  :-moz-any(article, aside, nav, section)
  .md h1 {
    display: block;
    font-size: 0.67em;
    font-weight: bold;
    margin-block-start: 2.33em;
    margin-block-end: 2.33em;
  }
  `
  const text = typeof props.children === "string" ? props.children : renderToString(props.children)
  return (<>
    <style>{css}</style>
    <div dangerouslySetInnerHTML={{
      __html: parseMarkdown(text),
    }} class="md"></div>
  </>)
}