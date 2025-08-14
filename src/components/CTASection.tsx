import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-amber-200/30 to-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-orange-200/20 to-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-amber-100/10 to-orange-100/10 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-800 via-orange-700 to-amber-800 bg-clip-text text-transparent">
          Contributions?
        </h2>
        <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          Whether you're fixing bugs, adding features, or improving docs — every
          contribution counts. Let's build something great together!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="outline"
            size="lg"
            className="group relative text-lg px-8 py-3 w-auto border-2 border-amber-300/50 text-amber-800 bg-white/70 backdrop-blur-sm hover:bg-white/90 hover:border-amber-400 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <Link href="https://github.com/huzfm/Devark">GitHub</Link>
          </Button>
          <Button
            size="lg"
            className="group relative text-lg px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0"
          >
            <Link href="https://github.com/huzfm/Devark/tree/master/documentation">
              View Documentation
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
