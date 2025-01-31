"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function BakimOnarimPage() {
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
          <h1 className="text-4xl font-bold mb-8 text-center">Bakım ve Onarım</h1>

          <div className="relative w-full h-[400px] mb-12 rounded-xl overflow-hidden">
            <Image
              src="/images/yuksek-gerilim-1.jpg"
              alt="Bakım ve Onarım"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <div className="bg-white/50 dark:bg-zinc-800/50 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Bakım Hizmetlerimiz</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">⚡</span>
                  <span>Periyodik bakım ve kontrol</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">⚡</span>
                  <span>Önleyici bakım programları</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">⚡</span>
                  <span>Termografik ölçüm ve analiz</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">⚡</span>
                  <span>Yağ analizi ve filtrasyon</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">⚡</span>
                  <span>Sistem optimizasyonu</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/50 dark:bg-zinc-800/50 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Onarım Hizmetlerimiz</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                  <span>Arıza tespit ve giderme</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                  <span>Acil müdahale servisi</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                  <span>Parça değişimi ve yenileme</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                  <span>Sistem iyileştirme</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                  <span>Test ve devreye alma</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <div className="bg-white/50 dark:bg-zinc-800/50 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">7/24 Teknik Destek</h2>
              <p className="leading-relaxed">
                Deneyimli teknik ekibimiz, olası arıza durumlarında hızlı müdahale için 
                7/24 hizmetinizdedir. Düzenli bakım programlarımızla arıza risklerini 
                minimize ediyor, sistemlerinizin ömrünü uzatıyoruz.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Hızlı müdahale ekibi</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Mobil servis araçları</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Yedek parça stoku</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Uzaktan destek hizmeti</span>
                </li>
              </ul>
            </div>

            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/images/yuksek-gerilim-1.jpg"
                alt="Bakım ve Onarım"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image
                src="/images/yuksek-gerilim-1.jpg"
                alt="Bakım Onarım Çalışma 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image
                src="/images/yuksek-gerilim-1.jpg"
                alt="Bakım Onarım Çalışma 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image
                src="/images/yuksek-gerilim-1.jpg"
                alt="Bakım Onarım Çalışma 3"
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