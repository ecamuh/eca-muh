"use client";

import { motion } from "framer-motion";

export default function GizlilikPolitikasiPage() {
  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="prose prose-lg dark:prose-invert max-w-none"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Gizlilik Politikası</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Kişisel Verilerin Korunması</h2>
            <p>
              Şirketimiz, kişisel verilerinizin gizliliğine ve güvenliğine önem vermektedir. 
              Bu veriler 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında işlenmekte 
              ve korunmaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Toplanan Veriler</h2>
            <p>
              Web sitemizi ziyaret ettiğinizde aşağıdaki bilgiler otomatik olarak toplanabilir:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>IP adresi</li>
              <li>Tarayıcı bilgileri</li>
              <li>Ziyaret tarihi ve süresi</li>
              <li>Görüntülenen sayfalar</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Verilerin Kullanımı</h2>
            <p>
              Toplanan veriler aşağıdaki amaçlarla kullanılmaktadır:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Hizmet kalitesini artırmak</li>
              <li>İstatistiksel analizler yapmak</li>
              <li>Yasal yükümlülükleri yerine getirmek</li>
              <li>Güvenliği sağlamak</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Çerezler</h2>
            <p>
              Sitemiz, kullanıcı deneyimini iyileştirmek için çerezler kullanmaktadır. 
              Çerez kullanımını tarayıcı ayarlarınızdan kontrol edebilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Veri Güvenliği</h2>
            <p>
              Kişisel verileriniz endüstri standardı güvenlik önlemleriyle korunmaktadır. 
              Verilerinizin güvenliği için düzenli olarak güvenlik değerlendirmeleri yapılmaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. İletişim</h2>
            <p>
              Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
} 