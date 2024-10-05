"use client"
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconWorld,
  IconBrandLinkedin 
} from "@tabler/icons-react";

export function Socials() {
  const links = [
    

    {
      title: "Portfolio",
      icon: (
        <IconWorld className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://portfolio2-frontend-eight.vercel.app/",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/siddharth-kumar-8041921b7/",
    },
    {
      title: "X",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/siddharth12002",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/siddharth122002",
    },
  ];
  return (
    <div className="flex absolute items-center justify-center h-[35rem] w-full md:top-[50vh] top-[40vh]">
      <FloatingDock
        
        items={links}
      />
    </div>
  );
}
