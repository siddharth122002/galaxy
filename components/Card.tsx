/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-expressions */

"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

export function Card() {
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 ">
        <Image
          src="https://images.unsplash.com/photo-1510981023495-45fca86762e9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-white font-semibold mt-4 mb-2 ">
        Stargazing Night
        </p>

        <p className="text-sm text-white">
        Meet us at Arizoana on 24th Jun'24 to view constellations and planets through our telescopes!
        </p>
  
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 ">
        <Image
          src="https://images.unsplash.com/photo-1483347756197-71ef80e95f73?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-white font-semibold mt-4 mb-2 ">
        Astrophotography Workshop
        </p>

        <p className="text-sm text-white">
        Learn to capture breathtaking images of the night sky with your camera.
        </p>
  
      </BackgroundGradient>
    </div>
  );
}
