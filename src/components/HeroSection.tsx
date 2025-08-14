"use client";

import TerminalBox from "./TerminalBox";
import TypingText from "../components/Tagline";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen py-10 sm:py-16 md:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-amber-950 via-orange-950 to-yellow-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-gradient-to-br from-amber-400/25 via-orange-500/20 to-yellow-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-gradient-to-tr from-yellow-400/25 via-amber-500/20 to-orange-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 sm:w-80 md:w-96 h-60 sm:h-80 md:h-96 bg-gradient-to-r from-amber-400/15 via-orange-400/10 to-yellow-500/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-gradient-to-bl from-amber-300/20 to-orange-400/15 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.08)_1px,transparent_1px)] bg-[size:24px_24px] sm:bg-[size:32px_32px]"></div>

      <div className="container mx-auto text-center max-w-7xl relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-900/90 to-orange-900/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-amber-200 mb-6 sm:mb-8 border border-amber-400/40 shadow-2xl shadow-amber-500/30 hover:shadow-3xl hover:shadow-amber-400/40 transition-all duration-300 hover:scale-105">
          <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-amber-300 animate-pulse drop-shadow-lg" />
          <span className="bg-gradient-to-r from-amber-200 via-yellow-200 to-orange-200 bg-clip-text text-transparent font-bold">
            shadcn/ui but for backend
          </span>
        </div>

        <TypingText />

        <div className="mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 tracking-tight text-white leading-none">
            <span className="block mb-2 sm:mb-4 drop-shadow-2xl">
              Build Your
            </span>
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent animate-pulse drop-shadow-2xl filter brightness-110">
              Infrastructure
            </span>
          </h1>

          <div className="flex items-center justify-center gap-2 sm:gap-4 mt-4 sm:mt-8">
            <Terminal className="w-6 h-6 sm:w-8 sm:h-8 text-amber-300 drop-shadow-2xl animate-pulse filter brightness-110" />
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-200 via-white to-amber-100 bg-clip-text text-transparent">
              with one command
            </span>
          </div>
        </div>

        <div className="mb-8 sm:mb-12 max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
          <div className="backdrop-blur-md bg-gradient-to-br from-amber-900/70 via-orange-900/60 to-yellow-900/70 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border font-mono border-amber-400/30 shadow-2xl shadow-amber-500/20 hover:shadow-amber-400/30 transition-all duration-300">
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed mb-4 sm:mb-6 md:mb-8 font-medium">
              With just one command, build your backend infrastructure. Add
              <span className="bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-300 bg-clip-text text-transparent font-bold mx-1 sm:mx-2 filter brightness-110">
                authentication, payment services, API
              </span>
              and more instantly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 md:gap-8 text-xs sm:text-sm font-semibold">
              <div className="flex items-center gap-2 sm:gap-3 text-amber-200">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-amber-300 to-yellow-400 rounded-full animate-pulse shadow-lg shadow-amber-400/60 filter brightness-110"></div>
                <span>Zero Configuration</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-orange-200">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-orange-300 to-amber-400 rounded-full animate-pulse shadow-lg shadow-orange-400/60 filter brightness-110"></div>
                <span>Production Ready</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-yellow-200">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-yellow-300 to-amber-400 rounded-full animate-pulse shadow-lg shadow-yellow-400/60 filter brightness-110"></div>
                <span>Developer First</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center mb-8 sm:mb-12 md:mb-16">
          <Button
            size="lg"
            className="group text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-amber-800 via-orange-800 to-yellow-800  text-white font-mono font-bold rounded-xl sm:rounded-2xl shadow-2xl shadow-amber-500/40 hover:shadow-amber-400/50 transition-all duration-300 hover:scale-105 border-0 filter brightness-110"
          >
            Get Started Now
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-amber-900/90 to-orange-900/90   font-mono font-bold rounded-xl sm:rounded-2xl border-2 border-amber-400/40 hover:border-amber-300/60 shadow-xl  text-white shadow-amber-500/20 hover:shadow-amber-400/30 transition-all duration-300 hover:scale-105"
          >
            <Terminal className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3" />
            View Demo
          </Button>
        </div>

        <div className="mb-8 sm:mb-12 md:mb-16">
          <TerminalBox />
        </div>
      </div>
    </section>
  );
}
