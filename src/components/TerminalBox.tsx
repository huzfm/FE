// components/TerminalBox.tsx

"use client";

import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

export default function TerminalBox() {
  return (
    <div className="bg-[#1e1e1e] text-white font-mono rounded-lg p-6 max-w-3xl mx-auto border border-gray-700 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-400">~/backend-ui</span>
        <Button variant="ghost" size="sm" className="hover:bg-gray-700">
          <Copy className="w-4 h-4 text-gray-300" />
        </Button>
      </div>

      <div className="space-y-2 text-sm leading-relaxed">
        <p className="text-green-400">
          huzfm@backend-kit <span className="text-white">~</span> $
          <span className="ml-2 text-white">pnpm add oauth</span>
        </p>
        <p className="text-gray-400">
          ✔ Installed dependencies: express, passport, dotenv
        </p>

        <p className="text-green-400">
          huzfm@backend-kit <span className="text-white">~</span> $
          <span className="ml-2 text-white">pnpm add paymment</span>
        </p>
        <p className="text-gray-400">✔ Stripe setup for payment</p>

        <p className="text-green-400">
          huzfm@backend-kit <span className="text-white">~</span> $
          <span className="ml-2 text-white">pnpm add otp-service</span>
        </p>
        <p className="text-gray-400">✔ OTP service setup with resend</p>

        <p className="text-green-400">
          huzfm@backend-kit <span className="text-white">~</span> $
          <span className="animate-pulse ml-2">█</span>
        </p>
      </div>
    </div>
  );
}
