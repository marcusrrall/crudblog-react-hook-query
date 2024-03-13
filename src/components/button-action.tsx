"use client";
import { Pencil, Trash } from "lucide-react";
import Link from "next/link";

export default function ButtonAction() {
  return (
    <div>
      <Link href="/edit/1" className="btn mr-2">
        <Pencil />
        Edit
      </Link>
      <button className="btn btn-error">
        <Trash />
        Delete
      </button>
    </div>
  );
}
