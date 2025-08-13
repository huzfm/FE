import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative py-16 px-4 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-amber-200/30 to-orange-300/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-rose-200/30 to-pink-300/30 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-yellow-200/20 to-amber-300/20 rounded-full blur-lg"></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="flex justify-center space-x-8 mb-8">
          <Link
            href="https://linkedin.com/in/huzfm"
            target="_blank"
            className="group relative p-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Linkedin className="w-6 h-6 text-slate-700 group-hover:text-blue-600 transition-colors duration-300" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          <Link
            href="https://github.com/huzfm"
            target="_blank"
            className="group relative p-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Github className="w-6 h-6 text-slate-700 group-hover:text-slate-900 transition-colors duration-300" />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-500/10 to-slate-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          <Link
            href="https://x.com/huzfm"
            target="_blank"
            className="group relative p-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Twitter className="w-6 h-6 text-slate-700 group-hover:text-blue-500 transition-colors duration-300" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>

        <div className="inline-block px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl shadow-lg">
          <p className="text-slate-700 font-medium flex justify-center items-center gap-2">
            Made with
            <span className="inline-block animate-pulse text-red-500 text-lg">
              ❤
            </span>
            by{" "}
            <a
              href="http://huzfm.vercel.app"
              target="_blank"
              className="font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent hover:from-orange-600 hover:to-rose-600 transition-all duration-300 hover:scale-105 inline-block"
              rel="noreferrer"
            >
              huzfm
            </a>
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
        </div>
      </div>
    </footer>
  );
}
