"use client";

import { usePathname } from "next/navigation";
import { Header1 } from "./ui/header";

export default function HeaderWrapper() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  
  if (isHomePage) {
    return null;
  }
  
  return <Header1 />;
} 