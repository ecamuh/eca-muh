"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function ProjelerimizPage() {
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
          className="prose prose-lg dark:prose-invert max-w-none mb-16"
        >
          <h1 className="text-4xl font-bold mb-8 text-center">Projelerimiz</h1>

          <div className="relative w-full h-[400px] mb-12 rounded-xl overflow-hidden">
            <Image
              src="/images/yuksek-gerilim-1.jpg"
              alt="Projelerimiz"
              fill
              className="object-cover"
            />
          </div>

          {/* Tamamlanan Projeler */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-center">Tamamlanan Projeler</h2>
            
            <div className="grid gap-8 md:grid-cols-2 mb-12">
              <div className="bg-white/50 dark:bg-zinc-800/50 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Endüstriyel Tesis Trafo Merkezi</h3>
                <p className="mb-4">İzmir&apos;de büyük bir endüstriyel tesis için 154 kV trafo merkezi kurulumu ve enerji nakil hattı projesi.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span>154 kV Trafo Merkezi Kurulumu</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span>10 km Enerji Nakil Hattı</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span>SCADA Sistemi Entegrasyonu</span>
                  </li>
                </ul>
              </div>
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/images/yuksek-gerilim-1.jpg"
                  alt="Endüstriyel Tesis Projesi"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 mb-12">
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/images/yuksek-gerilim-1.jpg"
                  alt="Güneş Enerjisi Projesi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-white/50 dark:bg-zinc-800/50 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Güneş Enerjisi Santrali Bağlantısı</h3>
                <p className="mb-4">Konya&apos;da 50 MW güneş enerjisi santralinin şebeke bağlantısı ve trafo merkezi projesi.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span>50 MW Güç Kapasitesi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span>Şebeke Bağlantı Sistemi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span>İzleme ve Kontrol Sistemleri</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Devam Eden Projeler */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-center">Devam Eden Projeler</h2>
            
            <div className="grid gap-8 md:grid-cols-2 mb-12">
              <div className="bg-white/50 dark:bg-zinc-800/50 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Organize Sanayi Bölgesi Modernizasyonu</h3>
                <p className="mb-4">Bursa OSB&apos;de kapsamlı elektrik altyapısı modernizasyon projesi.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span>5 Adet Trafo Merkezi Yenileme</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span>Yeraltı Kablo Şebekesi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span>Akıllı Şebeke Altyapısı</span>
                  </li>
                </ul>
              </div>
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/images/yuksek-gerilim-1.jpg"
                  alt="OSB Modernizasyon Projesi"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Proje Görselleri */}
          <div>
            <h2 className="text-3xl font-semibold mb-8 text-center">Proje Görselleri</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src="/images/yuksek-gerilim-1.jpg"
                  alt="Proje Görsel 1"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src="/images/yuksek-gerilim-1.jpg"
                  alt="Proje Görsel 2"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src="/images/yuksek-gerilim-1.jpg"
                  alt="Proje Görsel 3"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src="/images/yuksek-gerilim-1.jpg"
                  alt="Proje Görsel 4"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
} 