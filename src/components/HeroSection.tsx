// components/HeroSection.tsx

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import TerminalBox from "./TerminalBox";
import FallingText from "../components/Tagline";
import TypingText from "../components/Tagline";

export default function HeroSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-r from-stone-950 via-rose-900 to-stone-950">
      <style>{`
        @keyframes shine {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
      <div className="container mx-auto text-center max-w-5xl">
        {/* <div className=" font-mono inline-flex items-center rounded-full bg-black px-4 py-1.5 text-md font-medium text-white mb-8 shadow-sm">
          shadcn/ui but for backend
        </div> */}
        <TypingText />
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
          <span
            className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900"
            style={{
              backgroundSize: "200% auto",
              animation: "shine 4s linear infinite",
              backgroundImage:
                "linear-gradient(90deg, #fff 20%, #000 50%, 	#fff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Build backends with
          </span>

          <br />
          <span className="text-black">one command</span>
        </h1>
        <p className="border-2 border-black rounded-2xl text-xl text-white font-mono font-medium mb-12 max-w-3xl mx-auto leading-relaxed space-y-10 px-6 py-4">
          With Just one command build your backend infrastructure. Add
          authentication, payment-services, APIs, and more instantly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            size="lg"
            className="text-[15px] px-8 py-3 bg-black font-mono text-white"
          >
            Get Started
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            size="lg"
            className="text-[15px] px-8 py-3 bg-white font-mono text-black"
          >
            View Components
          </Button>
        </div>
        <TerminalBox />
      </div>
    </section>
  );
}
