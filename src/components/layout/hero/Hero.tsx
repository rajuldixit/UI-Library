"use client";

import { Button } from "@/components/ui/button";


export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg">
            Welcome to Component Playground
        </h1>
        <p className="text-xl mb-8 max-w-2xl drop-shadow-md">
            Explore and test all UI components built with Next.js, Tailwind, and shadcn.
        </p>
        <div className="flex gap-4">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
            Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600">
            Learn More
            </Button>
        </div>
    </section>
  );
}
