"use client";

import { motion } from "framer-motion";

export default function KullanimKosullariPage() {
  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="prose prose-lg dark:prose-invert max-w-none"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Kullanım Koşulları</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Genel Hükümler</h2>
            <p>
              Bu web sitesini kullanarak aşağıdaki kullanım koşullarını kabul etmiş sayılırsınız. 
              Bu koşulları kabul etmiyorsanız, lütfen siteyi kullanmayınız.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Hizmet Kullanımı</h2>
            <p>
              Sitemizde sunulan hizmetler yalnızca bilgilendirme amaçlıdır. 
              Sunulan bilgilerin doğruluğu ve güncelliği konusunda azami özen gösterilmektedir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Fikri Mülkiyet Hakları</h2>
            <p>
              Site içeriğinde yer alan tüm metin, grafik, logo, resim ve diğer materyaller 
              şirketimizin fikri mülkiyeti altındadır. İzinsiz kullanımı yasaktır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Sorumluluk Reddi</h2>
            <p>
              Sitede yer alan bilgilerin kullanımından doğabilecek doğrudan veya dolaylı 
              zararlardan şirketimiz sorumlu tutulamaz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Değişiklikler</h2>
            <p>
              Şirketimiz, bu kullanım koşullarını önceden haber vermeksizin değiştirme 
              hakkını saklı tutar. Güncel koşullar için siteyi düzenli olarak kontrol ediniz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. İletişim</h2>
            <p>
              Kullanım koşulları ile ilgili sorularınız için bizimle iletişime geçebilirsiniz.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
} 