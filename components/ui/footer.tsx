interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface Footer2Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer2 = ({
  logo = {
    src: "/logo.png",
    alt: "ECA Mühendislik Logo",
    title: "ECA Mühendislik",
    url: "/",
  },
  tagline = "Yüksek gerilim sistemlerinde profesyonel mühendislik çözümleri",
  menuItems = [
    {
      title: "Hizmetlerimiz",
      links: [
        { text: "Yüksek Gerilim Sistemleri", url: "/hizmetler/yuksek-gerilim" },
        { text: "Trafo Merkezleri", url: "/hizmetler/trafo" },
        { text: "Enerji Nakil Hatları", url: "/hizmetler/enerji-nakil" },
        { text: "Bakım ve Onarım", url: "/hizmetler/bakim-onarim" },
      ],
    },
    {
      title: "Kurumsal",
      links: [
        { text: "Hakkımızda", url: "/hakkimizda" },
        { text: "Projelerimiz", url: "/projeler" },
        { text: "Blog", url: "/blog" },
        { text: "İletişim", url: "/iletisim" },
      ],
    },
    {
      title: "İletişim",
      links: [
        { text: "Telefon: +90 542 620 36 05", url: "tel:+905426203605" },
        { text: "E-posta: info@ecayuksekgerilim.com", url: "mailto:info@ecayuksekgerilim.com" },
        { text: "Adres: Trabzon, Türkiye", url: "/iletisim" },
      ],
    },
    {
      title: "Sosyal Medya",
      links: [
        { text: "LinkedIn", url: "#" },
        { text: "Instagram", url: "#" },
        { text: "Twitter", url: "#" },
      ],
    },
  ],
  copyright = "© 2024 ECA Mühendislik. Tüm hakları saklıdır.",
  bottomLinks = [
    { text: "Kullanım Koşulları", url: "/kullanim-kosullari" },
    { text: "Gizlilik Politikası", url: "/gizlilik-politikasi" },
  ],
}: Footer2Props) => {
  return (
    <section className="py-8 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-t">
      <div className="container">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <a href={logo.url} className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {logo.title}
                </a>
              </div>
              <p className="mt-4 font-bold text-gray-700 dark:text-gray-300">{tagline}</p>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold text-gray-800 dark:text-white">{section.title}</h3>
                <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col justify-between gap-4 border-t border-gray-200 dark:border-gray-800 pt-8 text-sm font-medium text-gray-600 dark:text-gray-400 md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="hover:text-blue-600 dark:hover:text-blue-400">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer2 }; 