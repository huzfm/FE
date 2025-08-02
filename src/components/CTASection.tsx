// components/CTASection.tsx

import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-24 px-4 bg-black text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to build faster?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Join thousands of developers who are shipping backends in minutes, not
          days.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-3 bg-white text-black hover:bg-gray-100"
          >
            Get Started Free
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-black bg-transparent"
          >
            View Documentation
          </Button>
        </div>
      </div>
    </section>
  );
}
