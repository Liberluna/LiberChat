import Devs from "~/components/config/developer.ts";

export default function Developers() {
  const devElements = Devs.map((dev, index) => (
    <div className="text-center w-30" key={index}>
      <img src={dev.Icon} alt="DevIcon" className="rounded-full w-20 h-20 mt-5 mx-auto" />
      <div className="mt-5 text-xl">{dev.Name}</div>
      <div className="mt-2 mb-3 text-sm word-break">{dev.Desc}</div>
    </div>
  ));

  return <>{devElements}</>;
}
