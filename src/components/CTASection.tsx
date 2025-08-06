// components/CTASection.tsx

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 px-4 bg-black text-white font-mono">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Want to contribute?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto ">
          contributions are welcome.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-3 w-auto border-white text-white  bg-transparent"
          >
            <Github className="w-10 h-4" />
            GitHub
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-3  bg-emerald-900 text-white "
          >
            View Documentation
          </Button>
        </div>
      </div>
    </section>
  );
}
