import Link from "libercomp/Link.tsx"

function FooterCol (props: { children: any, title: string, }) {
  return <div class="grid grid-rows-4 gap-2 justify-items-center">
    <span class="font-bold uppercase opacity-5">{ props.title }</span>
    { props.children }
  </div>
}
export default function () {
  return (
    <>
      <footer className="bg-gray-800 text-white pt-20 pb-10 mt-20">
        <div class="flex flex-wrap">
          <FooterCol title="Links">
            <Link to="/developers">Developers</Link>
          </FooterCol>
        </div>
        <div className="mt-5">
          <div className="mx-2 mt-5 text-center w-screen">
            &copy; 2023 LiberChat Team. MIT LICENSED. All Rights Reserved.
          </div>
          <div className="mx-2 text-center w-screen">
            Producted by{" "}
            <a
              href="https://liberluna.github.io"
              className="cursor-pointer underline hover:no-underline"
            >
              LiberLuna
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
