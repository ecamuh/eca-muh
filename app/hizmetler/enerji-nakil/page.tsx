"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function EnerjiNakilPage() {
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
          <h1 className="text-4xl font-bold mb-8 text-center">Enerji Nakil Hatları</h1>

          <div className="relative w-full h-[400px] mb-12 rounded-xl overflow-hidden">
            <Image
              src="/images/yuksek-gerilim-1.jpg"
              alt="Enerji Nakil Hatları"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <div className="bg-white/50 dark:bg-zinc-800/50 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Hizmetlerimiz</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">⚡</span>
                  <span>Enerji nakil hattı projelendirme</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">⚡</span>
                  <span>Hat tesisi ve montaj</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">⚡</span>
                  <span>Bakım ve onarım hizmetleri</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">⚡</span>
                  <span>Hat yenileme ve güçlendirme</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">⚡</span>
                  <span>Acil müdahale ve arıza giderme</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/50 dark:bg-zinc-800/50 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Uzmanlık Alanlarımız</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                  <span>Yüksek gerilim iletim hatları</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                  <span>Orta gerilim dağıtım hatları</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                  <span>Yeraltı kabloları</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                  <span>İzolasyon sistemleri</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                  <span>Hat koruma sistemleri</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <div className="bg-white/50 dark:bg-zinc-800/50 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Çözüm Odaklı Yaklaşım</h2>
              <p className="leading-relaxed">
                Her projede en son teknoloji ve güvenlik standartlarını uygulayarak, 
                kesintisiz enerji iletimini garanti ediyoruz. Çevresel faktörleri göz önünde 
                bulundurarak sürdürülebilir çözümler üretiyoruz.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Detaylı saha analizi ve planlama</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Çevre dostu çözümler</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Yüksek verimlilik standartları</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Düzenli bakım ve kontrol</span>
                </li>
              </ul>
            </div>

            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/images/yuksek-gerilim-1.jpg"
                alt="Enerji Nakil Detay"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image
                src="/images/yuksek-gerilim-1.jpg"
                alt="Enerji Nakil Çalışma 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image
                src="/images/yuksek-gerilim-1.jpg"
                alt="Enerji Nakil Çalışma 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image
                src="/images/yuksek-gerilim-1.jpg"
                alt="Enerji Nakil Çalışma 3"
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