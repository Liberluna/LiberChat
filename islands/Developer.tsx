import Devs from "~/components/config/developer.ts";

export default function Developers() {

  let dev_html:string = "";

  for (let i = 0;i < Devs.length;i++) {
    dev_html += `<div className="text-center w-30">`;
    dev_html += `<img src="`;
    dev_html += Devs[i].Icon;
    dev_html += `" alt="DevIcon" className="rounded-full w-20 h-20 mt-5 mx-auto" />`;
    dev_html += `<div className="mt-5 text-xl">`;
    dev_html += Devs[i].Name;
    dev_html += `</div>`;
    dev_html += `<div className="mt-2 text-sm word-break">`;
    dev_html += Devs[i].Desc;
    dev_html += `</div>`;
  }

  return <>
    {dev_html}
  </>
}