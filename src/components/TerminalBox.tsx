// components/TerminalBox.tsx

"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const commandMap = {
  pnpm: "pnpm install devark",
  npm: "npm install devark",
  yarn: "yarn add devark",
};

export default function TerminalBox() {
  const [tool, setTool] = useState<"pnpm" | "npm" | "yarn">("pnpm");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(commandMap[tool]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <h2 className="font-mono text-3xl p-10 text-black font-semibold">
        Installation
      </h2>
      <div className="bg-[#1e1e1e] text-white font-mono rounded-lg p-6 max-w-3xl mx-auto border border-gray-700 shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-400">~/devark</span>
          <div className="flex items-center gap-2">
            <select
              value={tool}
              onChange={(e) =>
                setTool(e.target.value as "pnpm" | "npm" | "yarn")
              }
              className="bg-gray-800 text-white text-sm rounded-md px-2 py-1 border border-gray-600"
            >
              <option value="pnpm">pnpm</option>
              <option value="npm">npm</option>
              <option value="yarn">yarn</option>
            </select>

            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopy}
              className="hover:bg-gray-700"
              aria-label="Copy install command"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4 text-gray-300" />
              )}
            </Button>
          </div>
        </div>

        {/* Terminal Output */}
        <div className="text-sm leading-relaxed">
          <p className="text-green-400">
            huzfm@devark <span className="text-white">~</span> $
            <span className="ml-2 text-white">{commandMap[tool]}</span>
          </p>
          <p className="text-gray-400 mt-2">
            ✔ Installing backend utilities...
          </p>
        </div>
      </div>
    </>
  );
}
