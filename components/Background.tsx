"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { Vor } from "./Vor";
export function Background() {
  return (
    <div className="h-screen w-full bg-zinc-900 fixed left-0 right-0">
      <Vor/>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
