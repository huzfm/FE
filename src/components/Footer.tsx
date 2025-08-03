// components/Footer.tsx

import { Zap } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-16 px-4 bg-gradient-to-r from-stone-950 via-rose-900 to-stone-950">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-black rounded-md flex items-center justify-center">
                <Zap className="w-3 h-3 text-white" />
              </div>
              <span className="font-bold text-black">BackendUI</span>
            </div>
            <p className="text-gray-600 text-sm">
              Backend components for modern web applications.
            </p>
          </div>
          {[
            {
              title: "Product",
              links: ["Components", "Templates", "Examples"],
            },
            {
              title: "Resources",
              links: ["Documentation", "Blog", "Community"],
            },
            { title: "Company", links: ["About", "GitHub", "Twitter"] },
          ].map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4 text-black">{section.title}</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="hover:text-black transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-sm text-gray-600">
          <p>&copy; 2024 BackendUI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
