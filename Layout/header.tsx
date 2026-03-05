"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineStar } from "react-icons/hi";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-gray-800 text-white">
      <div className="flex flex-row items-center justify-between gap-4 p-4">
        <div className="flex items-center gap-3">
          <HiOutlineStar className="size-8 text-amber-400" aria-hidden />
          <h1 className="text-2xl font-bold">My Portfolio</h1>
        </div>
        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-amber-400 ${
                pathname === link.href ? "text-amber-400" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
