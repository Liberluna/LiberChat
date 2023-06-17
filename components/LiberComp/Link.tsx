interface Props {
  children
  to: URL | string
}
export default function (props: Props) {
  return <a href={String(props.to)} className="cursor-pointer hover:underline mx-5">
    { props.children }
  </a>
}
