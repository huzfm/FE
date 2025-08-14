import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

// Custom X logo component
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-amber-900 via-orange-900 to-amber-800 border-t border-amber-700/20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <Link
              href="https://linkedin.com/in/huzfm"
              target="_blank"
              className="p-2 text-amber-300 hover:text-blue-400 hover:bg-amber-800/50 rounded-lg transition-all duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </Link>

            <Link
              href="https://github.com/huzfm"
              target="_blank"
              className="p-2 text-amber-300 hover:text-amber-100 hover:bg-amber-800/50 rounded-lg transition-all duration-200"
            >
              <Github className="w-5 h-5" />
            </Link>

            <Link
              href="https://x.com/huzfm"
              target="_blank"
              className="p-2 text-amber-300 hover:text-blue-400 hover:bg-amber-800/50 rounded-lg transition-all duration-200"
            >
              <XIcon className="w-5 h-5" />
            </Link>
          </div>

          {/* Attribution */}
          <div className="text-center">
            <p className="text-amber-200 text-sm bg-amber-800/30 backdrop-blur-sm border border-amber-700/20 px-6 py-3 rounded-full shadow-lg shadow-amber-900/50 hover:shadow-xl hover:shadow-amber-900/60 transition-all duration-300">
              Built by{" "}
              <a
                href="http://huzfm.vercel.app"
                target="_blank"
                className="text-amber-100 hover:text-orange-300 font-medium transition-colors duration-200"
                rel="noreferrer"
              >
                huzfm
              </a>
            </p>
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent"></div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-amber-300/70 text-xs">
              © 2025 All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
