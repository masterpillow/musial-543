'use client';
import React from 'react';
import { HiOutlineStar } from 'react-icons/hi';

export default function Header() {
  return (
    <header className="w-full bg-gray-800 text-white">
      <div className="flex flex-row items-center justify-between gap-4 p-4">
        <div className="flex items-center gap-3">
          <HiOutlineStar className="size-8 text-amber-400" aria-hidden />
          <h1 className="text-2xl font-bold">My Portfolio</h1>
        </div>
        <nav className="flex items-center gap-6">
          <a href="#home" className="text-sm font-medium hover:text-amber-400 transition-colors">
            Home
          </a>
          <a href="#projects" className="text-sm font-medium hover:text-amber-400 transition-colors">
            Projects
          </a>
          <a href="#about" className="text-sm font-medium hover:text-amber-400 transition-colors">
            About
          </a>
        </nav>
      </div>
    </header>
  );
}
