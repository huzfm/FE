"use client";
import { useState, useEffect } from "react";
import { ClipboardCopy } from "lucide-react";

type ComponentCardProps = {
  title: string;
  description: string;
  command: string;
};

const commandMap = {
  pnpm: (pkg: string) => `pnpm add ${pkg}`,
  npm: (pkg: string) => `npm install ${pkg}`,
  yarn: (pkg: string) => `yarn add ${pkg}`,
};

const comingSoonPackages = ["upload", "email", "redis", ""];

export default function ComponentCard({
  title,
  description,
  command,
}: ComponentCardProps) {
  const [tool, setTool] = useState<"pnpm" | "npm" | "yarn">("pnpm");
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  const packageName = command.split(" ").pop() || "";
  const isComingSoon = comingSoonPackages.includes(packageName);
  const installCommand = commandMap[tool](packageName);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopy = async () => {
    if (isComingSoon) return;
    await navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div
      className={`rounded-2xl p-6 shadow-xl transition bg-black transform duration-700 ease-out ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } hover:shadow-2xl`}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-white font-mono">{title}</h3>
        <select
          value={tool}
          onChange={(e) => setTool(e.target.value as "pnpm" | "npm" | "yarn")}
          className="border border-gray-300 bg-white rounded-md text-sm px-2 py-1 text-black"
          disabled={isComingSoon}
        >
          <option className="text-black" value="pnpm">
            pnpm
          </option>
          <option className="text-black" value="npm">
            npm
          </option>
          <option className="text-black" value="yarn">
            yarn
          </option>
        </select>
      </div>

      <p className="mb-4 text-white">{description}</p>

      <div className="rounded-md overflow-hidden bg-black shadow-inner relative">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-stone-800">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
          </div>
        </div>

        {/* Terminal Body */}
        <div className="flex justify-between items-center px-4 py-3 bg-[#1e1e1e] rounded-md shadow-inner overflow-x-auto">
          <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap pr-4">
            {isComingSoon ? `devark add ${packageName}` : installCommand}
          </pre>

          <button
            onClick={handleCopy}
            className={`text-white flex items-center gap-1 px-2 py-1 rounded-md transition ${
              isComingSoon
                ? "cursor-not-allowed opacity-50"
                : "hover:text-green-400 hover:border-green-500 border border-transparent"
            }`}
            aria-label="Copy command"
            disabled={isComingSoon}
          >
            {isComingSoon ? (
              <span className="text-xs font-mono text-yellow-400">
                Coming Soon
              </span>
            ) : copied ? (
              <span className="text-xs font-mono animate-pulse text-green-400">
                Copied
              </span>
            ) : (
              <ClipboardCopy size={18} className="text-gray-300" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
