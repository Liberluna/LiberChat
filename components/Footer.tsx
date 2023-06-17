export default function () {
  return (
    <>
      <footer className="bg-gray-800 text-white pt-20">
        <div className="flex flex-wrap bg-gray-700">
          <div>
            <div className="font-bold uppercase opacity-50 text-center w-screen">
              Links
            </div>
            <div className="text-center grid grid-rows-4">
              <a
                href="/updates"
                className="cursor-pointer hover:underline mx-5"
              >
                Release notes
              </a>
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
