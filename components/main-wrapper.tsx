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
    <div className="min-h-screen">
      <div className="mt-20">
        {children}
      </div>
    </div>
  );
} 