// components/CTASection.tsx

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 px-4 bg-black text-white font-mono">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Contributions?</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Whether you're fixing bugs, adding features, or improving docs — every
          contribution counts. Let’s build something great together!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-3 w-auto border-white text-white bg-transparent flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            <Link href="https://github.com/huzfm/Devark">GitHub</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-3 bg-emerald-900 text-white"
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
