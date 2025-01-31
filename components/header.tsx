"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container max-w-6xl h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl text-gray-900">ECA Elektrik</Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/hizmetler/yuksek-gerilim" className="text-sm text-gray-600 hover:text-blue-600">
            Yüksek Gerilim
          </Link>
          <Link href="/hizmetler/trafo" className="text-sm text-gray-600 hover:text-blue-600">
            Trafo Merkezleri
          </Link>
          <Link href="/hizmetler/enerji-nakil" className="text-sm text-gray-600 hover:text-blue-600">
            Enerji Nakil Hatları
          </Link>
          <Link href="/hizmetler/bakim-onarim" className="text-sm text-gray-600 hover:text-blue-600">
            Bakım ve Onarım
          </Link>
          <Link href="/projelerimiz" className="text-sm text-gray-600 hover:text-blue-600">
            Projelerimiz
          </Link>
          <Link href="/hakkimizda" className="text-sm text-gray-600 hover:text-blue-600">
            Hakkımızda
          </Link>
          <Link href="/iletisim" className="text-sm text-gray-600 hover:text-blue-600">
            İletişim
          </Link>
        </nav>
      </div>
    </header>
  );
} 