import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  Check,
  Copy,
  Database,
  Lock,
  Mail,
  MessageSquare,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-xl text-black">BackendUI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Features
            </Link>
            <Link
              href="#components"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Components
            </Link>
            <Link
              href="#docs"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Docs
            </Link>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-300 hover:bg-gray-50 bg-transparent"
            >
              GitHub
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center max-w-5xl">
          <div className="inline-flex items-center rounded-full bg-black px-4 py-1.5 text-sm font-medium text-white mb-8 shadow-sm">
            shadcn/ui but for backend
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            <span className="text-black">Build backends with</span>
            <br />
            <span className="text-black">one command</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            The same copy-paste philosophy as{" "}
            <span className="font-semibold text-black">shadcn/ui</span>, but for
            your backend infrastructure. Add authentication, databases, APIs,
            and more instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="text-lg px-8 py-3 bg-black hover:bg-gray-800 text-white"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 border-gray-300 hover:bg-gray-50 bg-transparent"
            >
              View Components
            </Button>
          </div>

          {/* Code Example */}
          <div className="bg-gray-50 rounded-xl p-8 max-w-3xl mx-auto border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-medium text-gray-700">
                Terminal
              </span>
              <Button variant="ghost" size="sm" className="hover:bg-gray-200">
                <Copy className="w-4 h-4" />
              </Button>
            </div>
            <div className="font-mono text-left space-y-3 text-sm">
              <div className="text-gray-500"># Add OAuth authentication</div>
              <div className="text-black font-medium">$ pnpm add oauth</div>
              <div className="text-gray-500"># Add database with Prisma</div>
              <div className="text-black font-medium">$ pnpm add database</div>
              <div className="text-gray-500"># Add email service</div>
              <div className="text-black font-medium">$ pnpm add email</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Everything you need to build
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pre-built, production-ready backend components that integrate
              seamlessly with your existing codebase.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-black">
                  Authentication
                </CardTitle>
                <CardDescription className="text-gray-600">
                  OAuth, JWT, session management, and user roles out of the box
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">
                      Google, GitHub, Discord OAuth
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">JWT token management</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">
                      Role-based permissions
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-black">Database</CardTitle>
                <CardDescription className="text-gray-600">
                  Prisma, migrations, and database utilities configured
                  instantly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">
                      PostgreSQL, MySQL, SQLite
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">
                      Auto-generated migrations
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Type-safe queries</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-black">
                  Communication
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Email, SMS, push notifications, and real-time messaging
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Transactional emails</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">WebSocket support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">SMS notifications</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Components Showcase */}
      <section id="components" className="py-24 px-4 bg-white">
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
              <TabsTrigger
                value="auth"
                className="data-[state=active]:bg-white data-[state=active]:text-black"
              >
                Auth
              </TabsTrigger>
              <TabsTrigger
                value="database"
                className="data-[state=active]:bg-white data-[state=active]:text-black"
              >
                Database
              </TabsTrigger>
              <TabsTrigger
                value="api"
                className="data-[state=active]:bg-white data-[state=active]:text-black"
              >
                API
              </TabsTrigger>
              <TabsTrigger
                value="utils"
                className="data-[state=active]:bg-white data-[state=active]:text-black"
              >
                Utils
              </TabsTrigger>
            </TabsList>

            <TabsContent value="auth" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-gray-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-black">
                      <Lock className="w-5 h-5" />
                      OAuth Provider
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      Complete OAuth implementation with multiple providers
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm border border-gray-200">
                      <div className="text-gray-500 mb-2">
                        # Install OAuth component
                      </div>
                      <div className="text-black font-medium">
                        pnpm add oauth
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-black">
                      <MessageSquare className="w-5 h-5" />
                      JWT Manager
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      Token generation, validation, and refresh logic
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm border border-gray-200">
                      <div className="text-gray-500 mb-2">
                        # Install JWT component
                      </div>
                      <div className="text-black font-medium">pnpm add jwt</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="database" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-gray-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-black">
                      <Database className="w-5 h-5" />
                      Prisma Setup
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      Complete Prisma configuration with migrations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm border border-gray-200">
                      <div className="text-gray-500 mb-2">
                        # Install database component
                      </div>
                      <div className="text-black font-medium">
                        pnpm add database
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-black">
                      <Zap className="w-5 h-5" />
                      Redis Cache
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      Redis integration for caching and sessions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm border border-gray-200">
                      <div className="text-gray-500 mb-2">
                        # Install Redis component
                      </div>
                      <div className="text-black font-medium">
                        pnpm add redis
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="api" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-gray-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-black">REST API</CardTitle>
                    <CardDescription className="text-gray-600">
                      CRUD operations with validation and error handling
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm border border-gray-200">
                      <div className="text-gray-500 mb-2">
                        # Install API component
                      </div>
                      <div className="text-black font-medium">pnpm add api</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-black">GraphQL</CardTitle>
                    <CardDescription className="text-gray-600">
                      GraphQL server with resolvers and schema
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm border border-gray-200">
                      <div className="text-gray-500 mb-2">
                        # Install GraphQL component
                      </div>
                      <div className="text-black font-medium">
                        pnpm add graphql
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="utils" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-gray-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-black">File Upload</CardTitle>
                    <CardDescription className="text-gray-600">
                      S3, Cloudinary, and local file upload handlers
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm border border-gray-200">
                      <div className="text-gray-500 mb-2">
                        # Install upload component
                      </div>
                      <div className="text-black font-medium">
                        pnpm add upload
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-black">Email Service</CardTitle>
                    <CardDescription className="text-gray-600">
                      Transactional emails with templates
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm border border-gray-200">
                      <div className="text-gray-500 mb-2">
                        # Install email component
                      </div>
                      <div className="text-black font-medium">
                        pnpm add email
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-black text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to build faster?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join thousands of developers who are shipping backends in minutes,
            not days.
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

      {/* Footer */}
      <footer className="border-t border-gray-200 py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-black rounded-md flex items-center justify-center">
                  <Zap className="w-3 h-3 text-white" />
                </div>
                <span className="font-bold text-black">BackendUI</span>
              </div>
              <p className="text-gray-600 text-sm">
                Backend components for modern web applications.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-black">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Components
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Templates
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Examples
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-black">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-black">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-sm text-gray-600">
            <p>&copy; 2024 BackendUI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
