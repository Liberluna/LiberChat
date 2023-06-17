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
                href="https://liberluna.github.io/"
                className="cursor-pointer hover:underline mx-5"
              >
                Liberluna Sites
              </a>
              <a
                href="https://github.com/liberluna"
                className="cursor-pointer hover:underline mx-5"
              >
                Liberluna GitHub
              </a>
              <a
                href="https://github.com/liberluna/liberchat"
                className="cursor-pointer hover:underline mx-5"
              >
                Liberchat Repo
              </a>
              <a
                href="https://line.me/ti/g2/beNFT8zr5MEL_Um5xmSBZthZwfIuZcQu8-bYMA"
                className="cursor-pointer hover:underline mx-5"
              >
                Liberluna OC
              </a>
            </div>
          </div>
          <div className="mx-2 mt-5 text-center w-screen">
            &copy; 2023 LiberCht Team. MIT LICENSED. All Rights Reserved.
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
