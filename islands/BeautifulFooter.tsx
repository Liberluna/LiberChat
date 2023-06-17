import Link from "libercomp/Link.tsx";
import { useEffect, useRef } from "preact/hooks";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current; //footerの要素取得

    if (!footer) return; //null抑制

    const handleResize = () => {
      const distance = footer.getBoundingClientRect().top; //距離
      const windowHeight = 
        self.innerHeight || document.documentElement.clientHeight;

      footer.style.marginTop = `${Math.max(windowHeight - distance, 0)}px`; //marginを設定 ビューポート - footerと画面上部の距離
    };

    // これによりfooterが下に来て見栄えよし

    handleResize(); // 初回レンダリング時にマージンを設定

    self.addEventListener("resize", handleResize);

    return () => {
      self.removeEventListener("resize", handleResize);
      footer.style.marginTop = "";
    };
  }, []);

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
  );
}
