"use client"

import { motion } from "framer-motion"
import { AuroraBackground } from "@/components/ui/aurora-background"

const projects = [
  {
    title: "Trafo Merkezi Modernizasyonu",
    description: "154/34.5 kV'lık trafo merkezinin modernizasyonu ve koruma sistemlerinin yenilenmesi projesi.",
    category: "Trafo Merkezi",
    location: "Trabzon",
    year: "2023",
    details: [
      "Koruma röleleri yenileme",
      "SCADA sistemi entegrasyonu",
      "Kesici ve ayırıcı modernizasyonu",
      "Topraklama sistemi iyileştirmesi"
    ]
  },
  {
    title: "Enerji Nakil Hattı Projesi",
    description: "80 km uzunluğunda 154 kV'lık enerji nakil hattı tasarımı ve uygulaması.",
    category: "Enerji Nakil",
    location: "Ankara-Eskişehir",
    year: "2023",
    details: [
      "Hat güzergahı optimizasyonu",
      "Direk yerleşimi ve tasarımı",
      "İletken seçimi ve montajı",
      "Topraklama sistemleri"
    ]
  },
  {
    title: "Güç Sistemleri Analizi",
    description: "Endüstriyel tesis için güç sistemleri analizi ve iyileştirme projesi.",
    category: "Güç Sistemleri",
    location: "Kocaeli",
    year: "2022",
    details: [
      "Güç kalitesi analizi",
      "Harmonik analiz",
      "Kompanzasyon sistemi tasarımı",
      "Enerji verimliliği çalışması"
    ]
  },
  {
    title: "Şalt Sahası Yenileme",
    description: "380 kV şalt sahasının yenilenmesi ve modernizasyonu projesi.",
    category: "Şalt Sahası",
    location: "İzmir",
    year: "2022",
    details: [
      "GIS sistemleri kurulumu",
      "Kontrol ve kumanda sistemleri",
      "Koruma sistemleri entegrasyonu",
      "Altyapı yenileme çalışmaları"
    ]
  }
]

export default function ProjectsPage() {
  return (
    <AuroraBackground>
      <div className="min-h-screen container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Projelerimiz
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                    {project.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-sm">
                      {project.location}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-sm">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                    {project.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AuroraBackground>
  )
} 