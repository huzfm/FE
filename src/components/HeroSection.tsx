"use client";

import TerminalBox from "./TerminalBox";
import TypingText from "../components/Tagline";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen py-10  px-4 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #d97706 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto text-center max-w-6xl relative z-10">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-6 py-2 text-sm font-medium text-amber-800 mb-8 shadow-lg border border-amber-200/50">
          <Zap className="w-4 h-4 text-amber-600" />
          <span className="font-mono">shadcn/ui but for backend</span>
        </div>

        <TypingText />

        {/* Main headline with enhanced styling */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight font-sans">
            <span className="block text-gray-800 mb-2">Build Your</span>
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 animate-pulse">
                Infrastructure
              </span>
              {/* Decorative underline */}
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transform scale-x-0 animate-[scaleX_2s_ease-in-out_infinite] origin-left"></div>
            </span>
          </h1>

          <div className="flex items-center justify-center gap-3 mt-6">
            <Terminal className="w-8 h-8 text-amber-600" />
            <span className="text-3xl md:text-4xl font-mono font-bold text-gray-700">
              with one command
            </span>
          </div>
        </div>

        {/* Enhanced description box */}
        <div className="relative mb-12 max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-200/20 to-orange-200/20 rounded-3xl blur-xl"></div>
          <div className="relative backdrop-blur-xl bg-white/70 shadow-2xl border border-amber-200/30 rounded-3xl p-8">
            <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed font-mono">
              With just one command, build your backend infrastructure. Add
              <span className="text-amber-600 font-bold mx-2 px-3 py-1 bg-amber-100/50 rounded-lg">
                authentication, payment services, API
              </span>
              and more instantly.
            </p>
            <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Zero Configuration</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Production Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span>Developer First</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            size="lg"
            className="group text-lg px-10 py-4 bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 font-mono"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-10 py-4 bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 hover:text-gray-900 font-semibold rounded-2xl border-2 border-amber-200 hover:border-amber-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-monox"
          >
            <Terminal className="w-5 h-5 mr-2" />
            View Demo
          </Button>
        </div>

        {/* Enhanced terminal box container */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 to-gray-800/10 rounded-3xl blur-2xl transform translate-y-4"></div>
          <div className="relative">
            <TerminalBox />
          </div>
        </div>
      </div>
      {/* Custom animations */}
      <style jsx>{`
        @keyframes scaleX {
          0%,
          100% {
            transform: scaleX(0);
          }
          50% {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
}
