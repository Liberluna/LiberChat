import Link from "libercomp/Link.tsx";

export default function () {
  return (
    <>
      <footer className="bg-gray-800 text-white pt-50 mt-50">
        <div className="flex flex-wrap bg-gray-700">
          <div>
            <div className="font-bold uppercase opacity-50 text-center w-screen">
              Links
            </div>
            <div className="text-center grid grid-rows-2 grid-cols-2 gap-2">
              <Link to="/updates">Release notes</Link>
              <Link to="https://github.com/LiberLuna/LiberChat">GitHub</Link>
            </div>
          </div>
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
