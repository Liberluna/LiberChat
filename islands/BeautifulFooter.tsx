import Link from "libercomp/Link.tsx";
import { useEffect, useRef } from "preact/hooks";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  if (footerRef.current) {
    footerRef.current.style.marginTop = "1000px"; //カクツキ抑制
  }

  useEffect(() => {
    const handleResize = () => {
      const footer = footerRef.current;

      if (!footer) return;

      const distance = footer.getBoundingClientRect().top;
      const windowHeight =
        self.innerHeight || document.documentElement.clientHeight;

      footer.style.marginTop = `${Math.max(windowHeight - distance, 0)}px`;
    };

    handleResize();

    self.addEventListener("resize", handleResize);

    return () => {
      self.removeEventListener("resize", handleResize);
      if (footerRef.current) {
        footerRef.current.style.marginTop = "";
      }
    };
  }, [footerRef]);

  return (
    <footer className="bg-gray-800 text-white pt-50" ref={footerRef}>
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
          Produced by{" "}
          <a
            href="https://liberluna.github.io"
            className="cursor-pointer underline hover:no-underline"
          >
            LiberLuna
          </a>
        </div>
      </div>
    </footer>
  );
}
