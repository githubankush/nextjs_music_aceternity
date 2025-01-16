"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
    {
      title: "Explore the World of Sound",
      description:
        "Discover a wide range of musical instruments that inspire creativity and passion. From timeless classics to modern innovations, we have instruments for every musician.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Explore the World of Sound
        </div>
      ),
    },
    {
      title: "Shop String Instruments",
      description:
        "Experience the magic of strings with our exclusive collection of guitars, violins, and more. Perfect for beginners and professionals alike.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--black-800))] flex items-center justify-center text-white">
            Shop String Instruments
          </div>
        ),
    },
    {
      title: "Percussion for Every Beat",
      description:
        "Create rhythm and groove with our range of percussion instruments. Whether you're into drums or cajons, find the beat that moves you.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-400),var(--yellow-500))] flex items-center justify-center text-white">
          Percussion for Every Beat
        </div>
      ),
    },
    {
      title: "Your Music, Your Way",
      description:
        "Looking for inspiration? Our collection of keyboards and synthesizers helps you compose and create music that truly resonates.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--blue-500))] flex items-center justify-center text-white">
          Your Music, Your Way
        </div>
      ),
    },
  ];
  
export function ScrollComponent() {
  return (
    <div className="">
      <StickyScroll content={content} />
    </div>
  );
}
