"use client";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const words = `We are dedicated to advancing knowledge and enthusiasm about space science and exploration. We unite space enthusiasts, researchers, and educators to promote understanding of the universe and inspire future generations.
`;

export function Intro() {
  return <TextGenerateEffect className="text-center font-normal" words={words} />;
}

