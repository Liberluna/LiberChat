import { Link } from "aleph/react";

export default function Header() {
  return (
    <header className="sticky top-0 w-full h-20">
      <div className="flex">
        <div class="bold">
          <Link to="/">LiberChat</Link>
        </div>
      </div>
    </header>
  );
}
