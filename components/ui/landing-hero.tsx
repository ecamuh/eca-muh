"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { AuroraButton } from "@/components/ui/aurora-button"

const words = [
  "Güvenilir",
  "Profesyonel",
  "Yenilikçi",
  "Sürdürülebilir",
  "Uzman"
]

export function LandingHero() {
  return (
    <div className="h-[90vh] w-full relative flex flex-col items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="relative flex flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400"
        >
          ECA Mühendislik
          <br />
          Yüksek Gerilim Sistemleri
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-4 text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-blue-800 dark:from-blue-300 dark:to-blue-600"
        >
          {words.join(" • ")}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 text-lg md:text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto px-4"
        >
          Yüksek gerilim sistemlerinde 20+ yıllık deneyim ile güvenilir, verimli ve sürdürülebilir çözümler sunuyoruz.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 flex flex-col md:flex-row gap-4 w-full max-w-xl mx-auto px-4"
        >
          <Link href="/iletisim" className="w-full md:w-auto">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <AuroraButton 
                className="w-full md:w-auto px-8 py-4 text-lg font-medium"
                glowClassName="from-blue-600 via-blue-500 to-blue-700"
              >
                Hemen İletişime Geçin
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="inline-block ml-2"
                >
                  →
                </motion.span>
              </AuroraButton>
            </motion.div>
          </Link>

          <Link href="/hakkimizda" className="w-full md:w-auto">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <button className="w-full bg-white dark:bg-zinc-800 text-gray-700 dark:text-white border border-gray-200 dark:border-zinc-700 px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors">
                Daha Fazla Bilgi
              </button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  )
} 