"use client";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Header1() {
    const navigationItems = [
        {
            title: "Ana Sayfa",
            href: "/",
            description: "",
        },
        {
            title: "Hizmetlerimiz",
            description: "Yüksek gerilim sistemlerinde profesyonel mühendislik çözümleri",
            items: [
                {
                    title: "Yüksek Gerilim",
                    href: "/hizmetler/yuksek-gerilim",
                },
                {
                    title: "Trafo Merkezleri",
                    href: "/hizmetler/trafo",
                },
                {
                    title: "Enerji Nakil Hatları",
                    href: "/hizmetler/enerji-nakil",
                },
                {
                    title: "Bakım ve Onarım",
                    href: "/hizmetler/bakim-onarim",
                },
            ],
        },
        {
            title: "Kurumsal",
            description: "Profesyonel ve güvenilir hizmet anlayışı",
            items: [
                {
                    title: "Hakkımızda",
                    href: "/hakkimizda",
                },
                {
                    title: "Projelerimiz",
                    href: "/projelerimiz",
                },
                {
                    title: "İletişim",
                    href: "/iletisim",
                },
            ],
        },
    ];

    const [isOpen, setOpen] = useState(false);
    return (
        <header className="w-full z-40 fixed top-0 left-0 bg-background border-b shadow-sm">
            <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
                <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
                    <NavigationMenu className="flex justify-start items-start">
                        <NavigationMenuList className="flex justify-start gap-4 flex-row">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    {item.href ? (
                                        <>
                                            <NavigationMenuLink asChild>
                                                <Link href={item.href}>
                                                    <Button variant="ghost">{item.title}</Button>
                                                </Link>
                                            </NavigationMenuLink>
                                        </>
                                    ) : (
                                        <>
                                            <NavigationMenuTrigger className="font-medium text-sm">
                                                {item.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent className="!w-[450px] p-4 bg-background shadow-md">
                                                <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                                                    <div className="flex flex-col h-full justify-between">
                                                        <div className="flex flex-col">
                                                            <p className="text-base">{item.title}</p>
                                                            <p className="text-muted-foreground text-sm">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                        <Link href="/iletisim">
                                                            <Button size="sm" className="mt-10 w-full">
                                                                İletişime Geçin
                                                            </Button>
                                                        </Link>
                                                    </div>
                                                    <div className="flex flex-col text-sm h-full justify-end">
                                                        {item.items?.map((subItem) => (
                                                            <NavigationMenuLink
                                                                href={subItem.href}
                                                                key={subItem.title}
                                                                className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                                                            >
                                                                <span>{subItem.title}</span>
                                                                <MoveRight className="w-4 h-4 text-muted-foreground" />
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
                                                </div>
                                            </NavigationMenuContent>
                                        </>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex lg:justify-center pl-4">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="ECA Mühendislik Logo"
                            width={220}
                            height={80}
                            className="h-12 w-auto sm:h-14 md:h-16"
                            priority
                        />
                    </Link>
                </div>
                <div className="flex justify-end items-center w-full gap-4">
                    <Link href="/iletisim">
                        <Button variant="ghost" className="hidden md:inline">
                            İletişime Geçin
                        </Button>
                    </Link>
                    <div className="flex lg:hidden">
                        <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
                            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </Button>
                        {isOpen && (
                            <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-4 sm:gap-8 max-h-[calc(100vh-5rem)] overflow-y-auto">
                                {navigationItems.map((item) => (
                                    <div key={item.title} className="px-4">
                                        <div className="flex flex-col gap-2">
                                            {item.href ? (
                                                <Link
                                                    href={item.href}
                                                    className="flex justify-between items-center py-2 hover:bg-muted rounded-lg px-3"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <span className="text-base sm:text-lg font-medium">{item.title}</span>
                                                    <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                                                </Link>
                                            ) : (
                                                <p className="text-base sm:text-lg font-medium py-2 px-3">{item.title}</p>
                                            )}
                                            {item.items &&
                                                item.items.map((subItem) => (
                                                    <Link
                                                        key={subItem.title}
                                                        href={subItem.href}
                                                        className="flex justify-between items-center py-2 hover:bg-muted rounded-lg px-3"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        <span className="text-sm sm:text-base text-muted-foreground">
                                                            {subItem.title}
                                                        </span>
                                                        <MoveRight className="w-4 h-4 stroke-1" />
                                                    </Link>
                                                ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export { Header1 }; 