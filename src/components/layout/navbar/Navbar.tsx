"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  links?: { href: string; label: string }[];
  cta?: { href: string; label: string };   
}

export default function Navbar({ links = [], cta }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-6 bg-transparent text-white z-50">
      <div></div>
      <ul className="flex gap-6 items-center">
        {links.map((link) => (
          <li key={link.href} className="hover:text-gray-200 transition">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
        {cta && (
        <Link href={cta.href}>
          <Button className="bg-white text-indigo-600 hover:bg-gray-100">
            {cta.label}
          </Button>
        </Link>
      )}
      </ul>
    </nav>
  );
}
