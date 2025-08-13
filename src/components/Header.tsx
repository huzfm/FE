"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Zap, Github, Menu } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="relative bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border-b border-amber-200/50 backdrop-blur-sm">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

      <div className="container mx-auto px-4 py-4 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-md flex items-center justify-center shadow-lg">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-amber-800 to-orange-700 bg-clip-text text-transparent font-mono">
            Devark
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#features"
            className="font-mono text-gray-700 font-semibold hover:text-amber-700 transition-colors duration-200 relative group"
          >
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="#components"
            className="font-mono text-gray-700 font-semibold hover:text-amber-700 transition-colors duration-200 relative group"
          >
            Components
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="#docs"
            className="font-mono text-gray-700 font-semibold hover:text-amber-700 transition-colors duration-200 relative group"
          >
            Docs
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Button
            variant="outline"
            size="sm"
            className="group border-2 border-amber-300/50 text-amber-800 bg-white/70 backdrop-blur-sm hover:bg-white/90 hover:border-amber-400 hover:scale-105 font-mono text-sm flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Github className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
            <Link href="https://github.com/huzfm/Devark">GitHub</Link>
          </Button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg bg-white/70 backdrop-blur-sm border border-amber-200/50 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all duration-200"
          aria-label="Open menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Menu className="w-6 h-6 text-amber-800" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white/90 backdrop-blur-sm border-t border-amber-200/50 px-4 py-4 flex flex-col gap-4">
          <Link
            href="#features"
            className="font-mono text-gray-700 font-semibold hover:text-amber-700 transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href="#components"
            className="font-mono text-gray-700 font-semibold hover:text-amber-700 transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Components
          </Link>
          <Link
            href="#docs"
            className="font-mono text-gray-700 font-semibold hover:text-amber-700 transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Docs
          </Link>
          <Button
            variant="outline"
            size="sm"
            className="border-2 border-amber-300/50 text-amber-800 bg-white/70 hover:bg-white/90 font-mono text-sm flex items-center gap-2 w-fit transition-all duration-300"
          >
            <Github className="w-4 h-4" />
            GitHub
          </Button>
        </nav>
      )}
    </header>
  );
}
