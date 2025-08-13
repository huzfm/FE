import { Tabs, TabsContent } from "@/components/ui/tabs";
import ComponentCard from "./ComponentCard";
import { components } from "../utils/data";

export default function ComponentsSection() {
  return (
    <section
      id="components"
      className="relative py-20 px-4 bg-gradient-to-br from-amber-900 via-orange-900 to-amber-800"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <div className="w-2 h-2 bg-amber-400 rounded-full" />
            <span className="text-sm font-medium text-white/90">
              Ready to Use Components
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-orange-200 bg-clip-text text-transparent">
            Browse Components
          </h2>

          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Copy and paste production-ready components into your project. Each
            component is crafted with care and optimized for performance.
          </p>
        </div>

        <Tabs defaultValue="all" className="max-w-6xl mx-auto ">
          <TabsContent value="all" className="mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              {components.map((component, index) => (
                <div
                  key={component.id}
                  className="opacity-0 animate-fade-in-up"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  <ComponentCard
                    title={component.title}
                    description={component.description}
                    command={component.command}
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
