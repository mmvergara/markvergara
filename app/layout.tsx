import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mark Vergara | Dev",
  description: "Mark Vergara's Profolio.",
  openGraph: {
    title: "Mark Vergara's Portfolio",
    description: "Mark Vergara's Profolio.",
    url: "https://markvergara.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Sidebar />
        <main className="pl-[50px] pt-[30px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
