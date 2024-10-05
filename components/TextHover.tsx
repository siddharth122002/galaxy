import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { div } from "framer-motion/client";

export function TextHover({i}:{i:number}) {
  return (
    <div className="h-[20rem] md:top-0 -top-32 relative flex items-center justify-center ">
      {i===1?(
        <TextHoverEffect text="Benefits" i={i} />
      ):i===2?(
        <TextHoverEffect text="Events" i={i} />
      ):(
        // <div className="bg-red-800">
          <TextHoverEffect  text="Join Community" i={i} />
        // </div>
      )}
    </div>
  );
}
