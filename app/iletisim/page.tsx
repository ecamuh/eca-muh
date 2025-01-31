"use client"

import { motion } from "framer-motion"
import { AuroraBackground } from "@/components/ui/aurora-background"
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <AuroraBackground>
      <div className="min-h-screen container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
              Hemen İletişime Geçin
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Yüksek gerilim sistemleri için profesyonel çözümler sunuyoruz
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
                İletişim Bilgileri
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Telefon</p>
                    <a href="tel:+905555555555" className="text-lg font-medium text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      +90 555 555 5555
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">E-posta</p>
                    <a href="mailto:info@ecayuksekgerilim.com" className="text-lg font-medium text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      info@ecayuksekgerilim.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Adres</p>
                    <p className="text-lg font-medium text-gray-800 dark:text-white">
                      İstanbul, Türkiye
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Çalışma Saatleri</p>
                    <p className="text-lg font-medium text-gray-800 dark:text-white">
                      Pazartesi - Cumartesi: 09:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-xl p-8 text-white"
            >
              <h2 className="text-2xl font-semibold mb-6">
                Neden Bizi Seçmelisiniz?
              </h2>
              
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>20+ yıllık sektör deneyimi</span>
                </li>
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>Uzman mühendis kadrosu</span>
                </li>
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>7/24 teknik destek</span>
                </li>
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>Modern teknoloji ve ekipman</span>
                </li>
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>Hızlı ve güvenilir çözümler</span>
                </li>
              </ul>

              <div className="mt-8">
                <p className="text-lg mb-4">
                  Projelerimiz hakkında detaylı bilgi almak için:
                </p>
                <Link 
                  href="/projeler"
                  className="block w-full"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors text-center cursor-pointer"
                  >
                    Projelerimizi İnceleyin
                    <span className="inline-block ml-2">→</span>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </AuroraBackground>
  )
} 