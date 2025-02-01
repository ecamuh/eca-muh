"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 mt-16 sm:mt-24">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* İletişim Bilgileri */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <p className="text-sm text-gray-600">
              Adres: Trabzon, Türkiye
            </p>
            <p className="text-sm text-gray-600">
              Tel: 0542 620 36 05
              <br />
              E-posta: info@ecamuhendislik.com
            </p>
          </div>

          {/* Hizmetler */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hizmetler/yuksek-gerilim" className="text-sm text-gray-600 hover:text-blue-600">
                  Yüksek Gerilim Sistemleri
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/trafo" className="text-sm text-gray-600 hover:text-blue-600">
                  Trafo Merkezleri
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/enerji-nakil" className="text-sm text-gray-600 hover:text-blue-600">
                  Enerji Nakil Hatları
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/bakim-onarim" className="text-sm text-gray-600 hover:text-blue-600">
                  Bakım ve Onarım
                </Link>
              </li>
            </ul>
          </div>

          {/* Kurumsal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Kurumsal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hakkimizda" className="text-sm text-gray-600 hover:text-blue-600">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/projelerimiz" className="text-sm text-gray-600 hover:text-blue-600">
                  Projelerimiz
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-sm text-gray-600 hover:text-blue-600">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Sosyal Medya */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Sosyal Medya</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Footer */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              © 2024 ECA Mühendislik. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="/kullanim-kosullari" className="text-sm text-gray-600 hover:text-blue-600">
                Kullanım Koşulları
              </Link>
              <Link href="/gizlilik-politikasi" className="text-sm text-gray-600 hover:text-blue-600">
                Gizlilik Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 