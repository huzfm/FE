import { Tabs, TabsContent } from "@/components/ui/tabs";
import ComponentCard from "./ComponentCard";
import { components } from "../utils/data";

export default function ComponentsSection() {
  return (
    <section
      id="components"
      className="py-10 px-4 bg-gradient-to-r from-stone-950 via-rose-900 to-stone-950"
    >
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black font-mono">
            Browse Components
          </h2>
        </div>

        <Tabs defaultValue="all" className="max-w-5xl mx-auto ">
          <TabsContent value="all" className="mt-8 bg-transparent border-0">
            <div className="grid md:grid-cols-2 gap-6">
              {components.map((component) => (
                <ComponentCard
                  key={component.id}
                  title={component.title}
                  description={component.description}
                  command={component.command}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
