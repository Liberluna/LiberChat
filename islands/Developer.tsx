import Devs from "~/components/config/developer.ts";

export default function Developers() {

  const Devs0 = Devs[0]
  const Devs1 = Devs[1]

  Devs[0] = Devs1
  Devs[1] = Devs0

  const devElements = Devs.map((dev, index) => (
    <a className="text-center w-30" key={index} href={dev.Link}>
      <img src={dev.Icon} alt="DevIcon" className="rounded-full w-20 h-20 mt-5 mx-auto" />
      <div className="mt-5 text-xl">{dev.Name}</div>
      <div className="mt-2 mb-3 text-sm word-break">{dev.Desc}</div>
    </a>
  ));

  return <>{devElements}</>;
}
