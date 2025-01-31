"use client"

import { motion } from "framer-motion"
import VideoPlayer from "@/components/ui/video-player"
import { AuroraBackground } from "@/components/ui/aurora-background"

export default function HakkimizdaPage() {
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
        >
          <div className="max-w-4xl mx-auto mb-12">
            <VideoPlayer src="https://videos.pexels.com/video-files/30333849/13003128_2560_1440_25fps.mp4" />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-8 text-center">Hakkımızda</h1>
            
            <div className="grid gap-8 md:grid-cols-2 mb-12">
              <div className="bg-white/50 dark:bg-zinc-800/50 p-8 rounded-xl">
                <h2 className="text-2xl font-semibold mb-4">Vizyonumuz</h2>
                <p>
                  ECA Mühendislik olarak, Türkiye&apos;nin enerji altyapısının modernizasyonunda 
                  öncü rol oynamayı ve yenilikçi çözümlerle sektöre yön vermeyi hedefliyoruz. 
                  Sürdürülebilir enerji çözümleri sunarak, müşterilerimizin ihtiyaçlarını en 
                  üst düzeyde karşılamayı amaçlıyoruz.
                </p>
              </div>
              
              <div className="bg-white/50 dark:bg-zinc-800/50 p-8 rounded-xl">
                <h2 className="text-2xl font-semibold mb-4">Misyonumuz</h2>
                <p>
                  Yüksek gerilim sistemleri alanında en son teknolojileri kullanarak, 
                  güvenilir ve verimli çözümler sunmak. Müşteri memnuniyetini ön planda 
                  tutarak, kaliteli hizmet anlayışımızla sektörde fark yaratmak.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Değerlerimiz</h2>
              <ul className="grid gap-6 md:grid-cols-3">
                <li className="bg-white/50 dark:bg-zinc-800/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Kalite</h3>
                  <p>Her projede en yüksek kalite standartlarını uygulayarak, müşterilerimize en iyi hizmeti sunuyoruz.</p>
                </li>
                <li className="bg-white/50 dark:bg-zinc-800/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Güvenilirlik</h3>
                  <p>İş güvenliği ve sistem güvenilirliği konularında taviz vermeden çalışıyoruz.</p>
                </li>
                <li className="bg-white/50 dark:bg-zinc-800/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Yenilikçilik</h3>
                  <p>Sürekli gelişen teknolojileri takip ederek, en modern çözümleri sunuyoruz.</p>
                </li>
              </ul>
            </div>

            <div className="mb-12 bg-white/50 dark:bg-zinc-800/50 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Ekibimiz</h2>
              <p>
                Deneyimli mühendislerimiz ve teknik ekibimizle, yüksek gerilim sistemleri 
                konusunda kapsamlı bilgi ve tecrübeye sahibiz. Sürekli eğitim ve gelişim 
                programlarıyla ekibimizin yetkinliklerini artırıyor, böylece müşterilerimize 
                en iyi hizmeti sunabiliyoruz.
              </p>
            </div>

            <div className="bg-white/50 dark:bg-zinc-800/50 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Kalite Politikamız</h2>
              <p>
                ISO 9001:2015 kalite yönetim sistemi sertifikasına sahip olan firmamız, 
                tüm süreçlerinde kalite standartlarına uygun hareket etmektedir. Müşteri 
                memnuniyeti odaklı yaklaşımımız ve sürekli iyileştirme prensibiyle, 
                hizmet kalitemizi sürekli artırıyoruz.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 