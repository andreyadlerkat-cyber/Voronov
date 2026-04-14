"use client";

import { personalInfo } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark border-t border-gray/10 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-light text-sm">
            © {currentYear} {personalInfo.name}. Все права защищены.
          </p>
          <p className="text-gray text-sm">
            Создано с ❤️ на Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
