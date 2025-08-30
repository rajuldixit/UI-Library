"use client";

import Link from "next/link";

interface NavbarProps {
  links: { href: string; label: string }[];
}

export default function Navbar({ links }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
      <div className="text-xl font-bold">MyApp</div>
      <ul className="flex gap-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
