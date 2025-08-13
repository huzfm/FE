"use client";
import { useState, useEffect } from "react";
import { ClipboardCopy, Check } from "lucide-react";

type ComponentCardProps = {
  title: string;
  description: string;
  command: string; // this will be like `npx devark add oauth`
};

const comingSoonPackages = ["upload", "redis", "jwt"];

export default function ComponentCard({
  title,
  description,
  command,
}: ComponentCardProps) {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Extract the package name from the command (e.g., "oauth" from "npx devark add oauth")
  const packageName = command.split(" ").pop() || "";
  const isComingSoon = comingSoonPackages.includes(packageName);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopy = async () => {
    if (isComingSoon) return;
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div
      className={`group relative rounded-2xl p-6 transition-all duration-500 ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } hover:scale-[1.02] hover:-translate-y-1`}
      style={{
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(12px)",
        boxShadow:
          "0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-amber-700 transition-colors duration-300">
            {title}
          </h3>

          {isComingSoon && (
            <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full border border-amber-200">
              Coming Soon
            </span>
          )}
        </div>

        <p className="mb-6 text-gray-600 leading-relaxed">{description}</p>

        <div className="rounded-xl border border-amber-200/60 group-hover:border-amber-300/80 overflow-hidden transition-all duration-300">
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-900">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <span className="text-xs text-gray-400 font-mono">terminal</span>
          </div>

          {/* Terminal Body */}
          <div className="flex justify-between items-center px-4 py-4 bg-black">
            <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap pr-3 flex-1">
              <span className="text-gray-400">$</span>{" "}
              {isComingSoon ? `npx devark add ${packageName}` : command}
            </pre>

            <button
              onClick={handleCopy}
              className={`ml-3 flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                isComingSoon
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-gray-800 border border-amber-700/50 hover:border-amber-600/70"
              }`}
              aria-label="Copy command"
              disabled={isComingSoon}
            >
              {isComingSoon ? (
                <span className="text-xs font-mono text-amber-400">Soon</span>
              ) : copied ? (
                <>
                  <Check size={14} className="text-green-400" />
                  <span className="text-xs font-mono text-green-400">
                    Copied!
                  </span>
                </>
              ) : (
                <>
                  <ClipboardCopy size={14} className="text-gray-300" />
                  <span className="text-xs font-mono text-gray-300">Copy</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
