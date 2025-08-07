import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-5 px-4 bg-black text-white">
      <div className="flex justify-center space-x-6 mb-4">
        <Link href="https://linkedin.com/in/huzfm" target="_blank">
          <Linkedin className="w-6 h-6 hover:text-blue-500 transition" />
        </Link>
        <Link href="https://github.com/huzfm" target="_blank">
          <Github className="w-6 h-6 hover:text-gray-400 transition" />
        </Link>
        <Link href="https://x.com/huzfm" target="_blank">
          <Twitter className="w-6 h-6 hover:text-blue-400 transition" />
        </Link>
      </div>
      <p className="text-center text-sm text-white  font-mono flex justify-center items-center gap-1 font-medium">
        Made with ❤ by{" "}
        <a href="http://huzfm.vercel.app" target="_blank">
          huzfm
        </a>
      </p>
    </footer>
  );
}
