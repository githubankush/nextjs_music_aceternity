"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import courseData from "../data/music_data.json";
import { div } from "framer-motion/client";
import { HoverEffect } from "./ui/card-hover-effect";
import Footer from "./Footer";

export function ShootingComponent() {
  return (
    <div className="h-[40rem] rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
      <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
      <Footer />

      </h2>
      <ShootingStars />
    </div>
  );
}