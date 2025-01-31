"use client";

import { Header1 } from "@/components/ui/header";
import { Footer2 } from "@/components/ui/footer";
import { usePathname } from "next/navigation";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="min-h-screen flex flex-col">
      {!isHomePage && (
        <header className="w-full z-40 fixed top-0 left-0 bg-background/80 backdrop-blur-sm border-b">
          <Header1 />
        </header>
      )}
      <main className={!isHomePage ? "mt-16 flex-grow" : "flex-grow"}>
        {children}
      </main>
      {!isHomePage && (
        <footer className="mt-auto">
          <Footer2 />
        </footer>
      )}
    </div>
  );
} 