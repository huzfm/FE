"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function TerminalBox() {
  const [packageManager, setPackageManager] = useState<"npm" | "pnpm" | "yarn">(
    "npm"
  );
  const [copied, setCopied] = useState(false);

  const getCommand = (pm: "npm" | "pnpm" | "yarn") => {
    const commands = {
      npm: "npm install devark",
      pnpm: "pnpm install devark",
      yarn: "yarn add devark",
    };
    return commands[pm];
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(getCommand(packageManager));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">
          Installation
        </h2>
      </div>

      <div className="flex items-center mb-4">
        <div className="flex gap-1">
          {(["npm", "pnpm", "yarn"] as const).map((pm) => (
            <button
              key={pm}
              onClick={() => setPackageManager(pm)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                packageManager === pm
                  ? "bg-amber-800 text-white shadow-lg font-mono font-semibold"
                  : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm font-mono font-semibold"
              }`}
            >
              {pm}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl border border-amber-700/20 overflow-hidden backdrop-blur-sm">
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-gray-800 to-gray-900 border-b border-amber-700/20">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm"></div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-amber-200 text-sm font-mono">Terminal</span>
          </div>
        </div>

        <div className="p-8 font-mono text-sm">
          <div className="text-amber-400 mb-4">
            <span className="text-amber-600">huzfm@devark:~$</span>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-4 border border-amber-700/20 flex items-center justify-between">
            <div className="text-white text-base">
              <span className="text-amber-500">$</span>{" "}
              {getCommand(packageManager)}
            </div>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-amber-200 hover:text-white transition-all duration-200 rounded-lg hover:bg-white/10 backdrop-blur-sm ml-4"
              title="Copy installation command"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          <div className="mt-6 space-y-2 text-amber-200/80">
            <div>🚀 Fast installation</div>
            <div>⚡ Zero configuration</div>
            <div>🔧 Ready to use</div>
          </div>
        </div>
      </div>
    </div>
  );
}
