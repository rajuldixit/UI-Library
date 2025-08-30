'use client'

import { Navbar, Hero, Footer } from "@/components/layout";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar links={[]} />
      <main className="flex-1">
        <Hero links={[]} />
      </main>
      <Footer links={[]} />
    </div>
  );
}
