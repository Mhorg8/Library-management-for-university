import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header/Header";
import { Toaster } from "./components/ui/toaster";

const rokhFont = localFont({
  src: [
    {
      path: "./fonts/RokhFaNum-Normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/RokhFaNum-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/RokhFaNum-Bold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/RokhFaNum-Light.woff2",
      weight: "300",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Bookyar | UNI",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${rokhFont.className} font-normal antialiased`}>
        <Header />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
