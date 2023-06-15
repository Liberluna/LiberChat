import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return <div>電子の海を捜索したが見つからなかった・・・ / {props.params.name}! </div>;
}
