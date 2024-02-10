import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "./lib/provider/providers";
import Navigations from './components/nav/Navigations'
import NavFooter from "@/app/components/nav/NavFooter";

const roboto = Roboto({ weight: ["100", "300", "500", "700"], subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
     
          <Providers>
            <Navigations />
            {children}
            <NavFooter />
          </Providers>
       
      </body>
    </html>
  );
}
