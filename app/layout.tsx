import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const hk_grotesk = Hanken_Grotesk({ subsets: ["latin"], weight: ['400', '500', '700', '800'] });

export const metadata: Metadata = {
  title: "MegaMart",
  description: "Shopping market",
  keywords: "shopping, daily shopping, all deals, big deals, shop, Wallmart"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={hk_grotesk.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
