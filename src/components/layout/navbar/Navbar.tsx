"use client";

import Link from "next/link";

interface NavbarProps {
  links: { href: string; label: string }[];
}

export default function Navbar({ links }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-6 bg-transparent text-white z-50">
      <div className="text-2xl font-bold">ComponentPlayground</div>
      <ul className="flex gap-6">
        <li className="hover:text-gray-200 transition">Home</li>
        <li className="hover:text-gray-200 transition">Docs</li>
        <li className="hover:text-gray-200 transition">About</li>
      </ul>
    </nav>
  );
}
