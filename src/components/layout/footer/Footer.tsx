"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-auto">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
            <div className="text-center md:text-left mb-4 md:mb-0">
            © 2025 Component Playground
            </div>
            <div className="flex gap-4">
            <a href="#">GitHub</a>
            <a href="#">Docs</a>
            <a href="#">About</a>
            </div>
        </div>
    </footer>
  );
}
