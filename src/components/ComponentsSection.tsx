// components/ComponentsSection.tsx

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ComponentCard from "./ComponentCard";

export default function ComponentsSection() {
  return (
    <section
      id="components"
      className="py-24 px-4 bg-gradient-to-r from-stone-950 via-rose-900 to-stone-950"
    >
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Browse Components
          </h2>
          <p className="text-xl text-gray-600">
            Copy, paste, and customize. All components are open source.
          </p>
        </div>

        <Tabs defaultValue="auth" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 bg-gray-100 p-1">
            {["auth", "database", "api", "utils"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="data-[state=active]:bg-white data-[state=active]:text-black"
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="auth" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              <ComponentCard
                title="OAuth Provider"
                description="Complete OAuth implementation with multiple providers"
                command="pnpm add oauth"
              />
              <ComponentCard
                title="JWT Manager"
                description="Token generation, validation, and refresh logic"
                command="pnpm add jwt"
              />
            </div>
          </TabsContent>

          <TabsContent value="database" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              <ComponentCard
                title="Prisma Setup"
                description="Complete Prisma configuration with migrations"
                command="pnpm add database"
              />
              <ComponentCard
                title="Redis Cache"
                description="Redis integration for caching and sessions"
                command="pnpm add redis"
              />
            </div>
          </TabsContent>

          <TabsContent value="api" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              <ComponentCard
                title="REST API"
                description="CRUD operations with validation and error handling"
                command="pnpm add api"
              />
              <ComponentCard
                title="GraphQL"
                description="GraphQL server with resolvers and schema"
                command="pnpm add graphql"
              />
            </div>
          </TabsContent>

          <TabsContent value="utils" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              <ComponentCard
                title="File Upload"
                description="S3, Cloudinary, and local file upload handlers"
                command="pnpm add upload"
              />
              <ComponentCard
                title="Email Service"
                description="Transactional emails with templates"
                command="pnpm add email"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
