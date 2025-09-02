'use client'

import { Navbar, Footer } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function DocsPage() {
  const componentsList = [
    { name: "Button", description: "Reusable button component" },
    { name: "Card", description: "Reusable card component" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar links={[]} />
      <main className="flex-1 px-6 py-16 bg-gray-50 dark:bg-gray-900">
        <h1 className="text-4xl font-bold mb-8">Documentation</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {componentsList.map((comp) => (
            <Card key={comp.name} className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{comp.name}</h2>
              <p className="text-gray-700 dark:text-gray-300">{comp.description}</p>
              <Button className="mt-4">View</Button>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
