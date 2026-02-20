'use client';
import React from 'react';
import { MdOutlineViewSidebar } from 'react-icons/md';

export default function Aside() {
  return (
    <aside className="w-64 shrink-0 flex flex-col gap-4 bg-teal-500 text-white p-4 rounded-lg">
      <div className="flex items-center gap-3">
        <MdOutlineViewSidebar className="size-6" aria-hidden />
        <h2 className="text-xl font-semibold">Sidebar</h2>
      </div>
      <p className="text-sm opacity-90">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </aside>
  );
}
