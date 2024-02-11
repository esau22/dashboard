"use client";
//import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import { cn } from "@/libs/utlis";
import { Sidebar } from "@/components/sidebar/sidebar";
import { ButtonIcon } from "@/components/ui/button-icon";
import { RiMenu2Line } from "react-icons/ri";
import { useState } from "react";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

/*export const metadata: Metadata = {
  title: "Dashboard | Admin",
  description: "This is Home Blog page",
};*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <html lang="en">
      <body className={cn("dark:bg-dark text-gray-300", inter.className)}>
        <Sidebar showMenu={showMenu} onClose={() => setShowMenu(false)} />
        <ButtonIcon
          icon={RiMenu2Line}
          onClick={() => setShowMenu(true)}
          className="lg:hidden fixed right-0 bottom-0 z-30 bg-secundary p-4 rounded-tl-lg"
        />
        <Header />

        <main className="lg:pl-[24vw] xl:pl-[13vw] px-5 xl:px-0 container mx-auto py-5 lg:py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
