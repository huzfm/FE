// components/Header.tsx
"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Zap, Github, Menu } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className=" bg-gradient-to-l from-stone-950 via-rose-900 to-stone-950 ">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-xl text-slate-300 font-mono">
            BackendUI
          </span>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#features" className="font-mono text-white font-semibold">
            Features
          </Link>
          <Link
            href="#components"
            className="font-mono text-white font-semibold"
          >
            Components
          </Link>
          <Link href="#docs" className="font-mono text-white font-semibold">
            Docs
          </Link>
          <Button
            variant="outline"
            size="sm"
            className="border-gray-300 text-white font-mono text-sm/loose flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            GitHub
          </Button>
        </nav>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-300"
          aria-label="Open menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Menu className="w-6 h-6 text-white" />
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-gradient-to-l from-stone-950 via-rose-900 to-stone-950 border-t border-gray-200 px-4 py-4 flex flex-col gap-4">
          <Link
            href="#features"
            className="font-mono text-white font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href="#components"
            className="font-mono text-white font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Components
          </Link>
          <Link
            href="#docs"
            className="font-mono text-white font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Docs
          </Link>
          <Button
            variant="outline"
            size="sm"
            className="border-gray-300 text-white font-mono text-sm/loose flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            GitHub
          </Button>
        </nav>
      )}
    </header>
  );
}
