"use client";

import { usePathname } from "next/navigation";

export default function MainWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  
  if (isHomePage) {
    return <>{children}</>;
  }
  
  return (
    <div className="min-h-[calc(100vh-20rem)]">
      <div className="mt-20 pb-16 sm:pb-24">
        {children}
      </div>
    </div>
  );
} 