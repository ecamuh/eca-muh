"use client"

import { LayoutGroup, motion } from "motion/react"

import { TextRotate } from "@/components/ui/text-rotate"

function Preview() {
  return (
    <div className="w-full h-full text-2xl sm:text-3xl md:text-5xl flex flex-row items-center justify-center bg-white dark:text-muted text-foreground font-light overflow-hidden p-12 sm:p-20 md:p-24">
      <LayoutGroup>
        <motion.p className="flex flex-col items-center text-center whitespace-pre" layout>
          <motion.span
            className="text-xl sm:text-2xl md:text-3xl mb-4 text-gray-700"
            layout
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
          >
            Emrah Can Aydın
          </motion.span>
          <motion.span
            className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-600"
            layout
          >
            Elektrik Elektronik Mühendisi
          </motion.span>
          <motion.div className="flex items-center">
            <motion.span
              className="pt-0.5 sm:pt-1 md:pt-2"
              layout
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            >
              Uzman{" "}
            </motion.span>
            <TextRotate
              texts={[
                "Yüksek Gerilim",
                "Güç Sistemleri",
                "Enerji Nakil",
                "Trafo Merkezi",
                "Şalt Sahası",
                "Koruma Sistemleri",
              ]}
              mainClassName="text-white px-2 sm:px-2 md:px-3 bg-blue-600 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"first"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
          </motion.div>
          <motion.span
            className="text-base sm:text-lg md:text-xl mt-8 text-gray-600"
            layout
          >
            Mühendislik Çözümleri
          </motion.span>
        </motion.p>
      </LayoutGroup>
    </div>
  )
}

export { Preview } 