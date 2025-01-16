import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Home from "@/components/Home";
import { Card } from "@/components/Card";
import { ScrollComponent } from "@/components/ScrollComponent";
import { ShootingComponent } from "@/components/ShootingComponent";
import { MeteorCard } from "@/components/MeteorCard";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Melody Craft",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <Home />
        <Card />
        <ScrollComponent />
        <MeteorCard />
        <ShootingComponent />
        
        {children}
      </body>
    </html>
  );
}
