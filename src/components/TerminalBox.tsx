"use client";

import { useState, useEffect } from "react";

export default function TerminalBox() {
  const [currentCommand, setCurrentCommand] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const commands = [
    "npx create-backend-app my-app",
    "cd my-app && npm run dev",
    "✅ Backend ready at http://localhost:3000",
  ];

  useEffect(() => {
    let commandIndex = 0;
    let charIndex = 0;

    const typeCommand = () => {
      if (commandIndex < commands.length) {
        if (charIndex < commands[commandIndex].length) {
          setCurrentCommand(commands[commandIndex].substring(0, charIndex + 1));
          charIndex++;
          setTimeout(typeCommand, 50);
        } else {
          setTimeout(() => {
            commandIndex++;
            charIndex = 0;
            if (commandIndex < commands.length) {
              setCurrentCommand("");
              setTimeout(typeCommand, 500);
            }
          }, 2000);
        }
      } else {
        // Reset animation
        setTimeout(() => {
          commandIndex = 0;
          charIndex = 0;
          setCurrentCommand("");
          typeCommand();
        }, 3000);
      }
    };

    typeCommand();

    // Cursor blinking
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="bg-gray-900 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-gray-400 text-sm font-mono">Terminal</span>
          </div>
        </div>

        {/* Terminal content */}
        <div className="p-6 font-mono text-sm">
          <div className="text-green-400 mb-2">
            <span className="text-gray-500">user@localhost:~$</span>
          </div>

          <div className="min-h-[120px] space-y-2">
            <div className="text-white">
              <span className="text-gray-500">$</span> {currentCommand}
              {showCursor && (
                <span className="bg-green-400 text-gray-900 ml-1">█</span>
              )}
            </div>

            {currentCommand.includes("✅") && (
              <div className="text-green-400 mt-4">
                <div>🚀 Authentication configured</div>
                <div>💳 Payment system ready</div>
                <div>🔗 API endpoints generated</div>
                <div>📊 Database connected</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
