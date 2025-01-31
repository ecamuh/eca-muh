"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function YuksekGerilimPage() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <AuroraBackground>
          <div className="w-full h-full" />
        </AuroraBackground>
      </div>
      <div className="relative container max-w-6xl mx-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-lg dark:prose-invert max-w-none"
        >
          <h1 className="text-4xl font-bold mb-8 text-center">Yüksek Gerilim Sistemleri</h1>

          <div className="relative w-full h-[400px] mb-12 rounded-xl overflow-hidden">
            <Image
              src="/images/yuksek-gerilim-1.jpg"
              alt="Yüksek Gerilim Sistemleri"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <div className="bg-white/50 dark:bg-zinc-800/50 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Sunduğumuz Hizmetler</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">⚡</span>
                  <span>Yüksek gerilim sistemlerinin tasarımı ve kurulumu</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">⚡</span>
                  <span>Güç transformatörleri ve şalt ekipmanları</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">⚡</span>
                  <span>Koruma ve kontrol sistemleri</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">⚡</span>
                  <span>İzolasyon ve topraklama çözümleri</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">⚡</span>
                  <span>Enerji kalitesi analizi ve iyileştirme</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/50 dark:bg-zinc-800/50 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Neden Biz?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                  <span>20+ yıllık sektör deneyimi</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                  <span>Uzman mühendis kadrosu</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                  <span>Modern teknoloji ve ekipman kullanımı</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                  <span>Güvenilir ve sürdürülebilir çözümler</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                  <span>7/24 teknik destek</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <div className="bg-white/50 dark:bg-zinc-800/50 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Kalite ve Güvenlik</h2>
              <p className="leading-relaxed">
                Tüm projelerimizde uluslararası standartlara uygun ekipman ve metodolojiler kullanıyoruz. 
                İş güvenliği ve kalite yönetimi bizim için en önemli önceliklerdir. Her projede:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>En son teknoloji ekipmanlar</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Sertifikalı güvenlik sistemleri</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Düzenli bakım ve kontrol hizmetleri</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Detaylı dokümantasyon ve raporlama</span>
                </li>
              </ul>
            </div>

            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/images/yuksek-gerilim-1.jpg"
                alt="Yüksek Gerilim Detay"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image
                src="/images/yuksek-gerilim-1.jpg"
                alt="Yüksek Gerilim Çalışma 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image
                src="/images/yuksek-gerilim-2.jpg"
                alt="Yüksek Gerilim Çalışma 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image
                src="/images/yuksek-gerilim-3.jpg"
                alt="Yüksek Gerilim Çalışma 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 