'use client'

import { Navbar, Hero, Footer } from "@/components/layout";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">        
      <Navbar links={[]} />
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
