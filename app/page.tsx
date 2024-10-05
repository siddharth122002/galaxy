import { Background } from "@/components/Background";
import { Form } from "@/components/Form";
import { Globe } from "@/components/Globe";
import { Hero } from "@/components/Hero";
import { Socials } from "@/components/Socials";
import { TextHover } from "@/components/TextHover";
import { Timelines } from "@/components/Timelines";
import { Card } from "@/components/Card";

export default function Home() {
  return (
    <>
      <Background />
      <div className="relative">
        <Hero/>
        <Socials/>
        <Timelines/>
        <div className="">
          <TextHover i={2}/>
          <div className="flex relative justify-center md:mt-32  flex-wrap gap-8 ">
            <Card/>
          </div>
        </div>
        <div className="my-48">
          <TextHover i={3}/>
          <div className="flex md:flex-row justify-center md:top-0 -top-48 relative items-center flex-col">
            <Form/>
            <Globe/>
          </div>

        </div>
        
      </div>
    </>
  );
}
