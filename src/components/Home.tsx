"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";


export default function BackgroundBeamsDemo() {
  return (
    <>
    <div className="h-[42rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        Unleash Your Inner Musician
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10 mt-10">
        Explore a world of sound and rhythm with our premium musical instruments. From timeless classics to modern masterpieces, we have everything you need to create magic.
        </p>
        
      </div>
      
<BackgroundBeams />
    </div>
  
    </>
  );
}


