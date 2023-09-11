"use client";
import Image from "next/image";
import * as Slider from "@radix-ui/react-slider";
import { useState } from "react";
import { Logo } from "@/icons/logo";

export default function Home() {
  const [slide, setSlide] = useState(0);
  return (
    <main className="flex-col items-center justify-between">
      <section className="min-h-screen flex">
        {/* <div
          className="h-10 w-10"
          style={{ backgroundColor: `hsl(${hue}, 91%, 68%)` }}
        >
          {hue}
        </div> */}
        <div className="absolute w-screen top-1/3">
          {slide == 0 && <Logo />}
          {slide == 1 && (
            <p className="max-w-xl mx-auto text-3xl">
              is an independent print magazine published in Berlin. Each issue
              deconstructs a different topic by exploring the dualities of ideas
              and all the conversations in between.
            </p>
          )}
          {slide == 2 && (
            <Image
              className="mx-auto"
              src="/issue02.jpg"
              alt=""
              width={300}
              height={380}
            />
          )}
        </div>

        <div className="absolute w-full bottom-0">
          <Slider.Root
            className="relative flex items-center select-none touch-none w-full h-32"
            defaultValue={[0]}
            max={10}
            step={1}
            onValueChange={(e) => setSlide(e[0])}
          >
            <Slider.Track className="bg-blackA10 relative grow h-full">
              <Slider.Range className="absolute bg-primary h-full" />
            </Slider.Track>
            <Slider.Thumb
              className="block w-10 h-32 bg-white cursor-arrow cursor-col-resize focus:outline-none"
              aria-label="Volume"
            />
          </Slider.Root>
        </div>
      </section>
    </main>
  );
}
