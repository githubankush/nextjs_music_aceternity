"use client"
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import courseData from "@/data/music_data.json";


export function Card() {
    const data = courseData.instruments.filter((item)=>item && item.title);
  
  return (
    <div className="max-w-5xl mx-auto">
      <HoverEffect items={data} />
    
     
    </div>
  );
}
