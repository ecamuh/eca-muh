"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function TrafoPage() {
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
          <h1 className="text-4xl font-bold mb-8 text-center">Trafo Merkezleri</h1>

          <div className="relative w-full h-[400px] mb-12 rounded-xl overflow-hidden">
            <Image
              src="/images/yuksek-gerilim-1.jpg"
              alt="Trafo Merkezleri"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <div className="bg-white/50 dark:bg-zinc-800/50 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Hizmet Kapsamımız</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">⚡</span>
                  <span>Trafo merkezi tasarımı ve projelendirme</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">⚡</span>
                  <span>Kurulum ve devreye alma</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">⚡</span>
                  <span>Modernizasyon ve yenileme</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">⚡</span>
                  <span>Periyodik bakım ve kontrol</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">⚡</span>
                  <span>Arıza tespit ve onarım</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/50 dark:bg-zinc-800/50 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Teknik Özellikler</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                  <span>Orta ve yüksek gerilim trafo merkezleri</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                  <span>Kompakt ve modüler çözümler</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                  <span>SCADA sistemleri entegrasyonu</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                  <span>Akıllı şebeke uyumluluğu</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                  <span>Uzaktan izleme ve kontrol</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <div className="bg-white/50 dark:bg-zinc-800/50 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Proje Yönetimi</h2>
              <p className="leading-relaxed">
                Her projeyi detaylı planlama ve profesyonel yönetim anlayışıyla ele alıyoruz. 
                Müşterilerimizin ihtiyaçlarına özel çözümler geliştirirken, enerji verimliliği ve 
                sürdürülebilirlik prensiplerine bağlı kalıyoruz.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Detaylı proje planlaması</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Süreç optimizasyonu</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Kalite kontrol ve denetim</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Zamanında teslim garantisi</span>
                </li>
              </ul>
            </div>

            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/images/yuksek-gerilim-1.jpg"
                alt="Trafo Merkezi Detay"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image
                src="/images/yuksek-gerilim-1.jpg"
                alt="Trafo Merkezi Çalışma 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image
                src="/images/yuksek-gerilim-1.jpg"
                alt="Trafo Merkezi Çalışma 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image
                src="/images/yuksek-gerilim-1.jpg"
                alt="Trafo Merkezi Çalışma 3"
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