import { BookOpenCheck } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-neutral-950">
      <div className="container">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">
            <BookOpenCheck color="white" />
          </Link>
        </div>
        <div className="flex-none">
          <Link href="/create" className="btn btn-ghost">
            Create post
          </Link>
        </div>
      </div>
    </div>
  );
}
