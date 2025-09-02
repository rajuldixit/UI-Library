'use client'

import { Navbar, Hero, Footer } from "@/components/layout";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">        
      <Navbar
        links={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
        ]}
        cta={{ href: "/docs", label: "Docs" }}
      />
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
