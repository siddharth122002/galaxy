"use client"
import React from "react";
import { Vortex } from "../components/ui/vortex";

export function Vor() {
    return (
        <div className="w-full hidden md:block h-screen mx-auto rounded-md absolute overflow-hidden">
          <Vortex
            backgroundColor="transparent"
            rangeY={800}
            particleCount={20}
            baseHue={120}
            className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
          >
          </Vortex>
        </div>
      );
}
