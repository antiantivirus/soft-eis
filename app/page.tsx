"use client";
import Image from "next/image";
import * as Slider from "@radix-ui/react-slider";
import { useState } from "react";
import { Transform } from "stream";
import RangeSlider from "@/components/rangeSlider";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  const [hue, setHue] = useState(107);
  const [rotate, setRotate] = useState(100);
  const [borderRadius, setBorderRadius] = useState(10);
  return (
    <div>
      <div className="absolute top-0 left-0 w-full">
        <Header />
      </div>

      <main className="flex-col items-center justify-between">
        <section className="flex flex-col justify-between min-h-screen">
          <div
            className="h-10 w-10"
            style={{ backgroundColor: `hsl(${hue}, 91%, 68%)` }}
          >
            {hue}
          </div>
          <Image
            className="mx-auto mb-4 border border-black"
            src="/issue02.jpg"
            alt=""
            width={250}
            height={300}
            style={{
              // borderRadius: `${borderRadius}px`,
              boxShadow: "0px 4px 39px 23px #CFDFA0",
              transform: `rotateY(${-(100 - rotate)}deg`,
            }}
          />
          <RangeSlider />

          <Footer />

          {/* <Slider.Root
          className="relative flex items-center select-none touch-none w-full h-32"
          defaultValue={[borderRadius * 10]}
          max={300}
          step={1}
          onValueChange={(e) => setBorderRadius(e[0] / 10)}
        >
          <Slider.Track className="bg-blackA10 relative grow h-full">
            <Slider.Range className="absolute bg-primary h-full" />
          </Slider.Track>
          <Slider.Thumb
            className="block w-5 h-32 bg-white cursor-arrow cursor-col-resize focus:outline-none"
            aria-label="Volume"
          />
        </Slider.Root> */}
          {/* <Slider.Root
          className="relative flex items-center select-none touch-none w-full h-20"
          defaultValue={[borderRadius * 10]}
          max={300}
          step={1}
          onValueChange={(e) => setBorderRadius(e[0] / 10)}
        >
          <Slider.Track className="bg-blackA10 relative grow h-full">
            <Slider.Range className="absolute bg-primary h-full" />
          </Slider.Track>
          <Slider.Thumb
            className="block w-5 h-20 bg-white cursor-arrow cursor-col-resize focus:outline-none"
            aria-label="Volume"
          />
        </Slider.Root> */}
          {/* <Slider.Root
          className="relative flex items-center select-none touch-none w-full h-20"
          defaultValue={[borderRadius * 10]}
          max={300}
          step={1}
          onValueChange={(e) => setBorderRadius(e[0] / 10)}
        >
          <Slider.Track className="bg-blackA10 relative grow h-full">
            <Slider.Range className="absolute bg-primary h-full" />
          </Slider.Track>
          <Slider.Thumb
            className="block w-5 h-20 bg-white cursor-arrow cursor-col-resize focus:outline-none"
            aria-label="Volume"
          />
        </Slider.Root> */}
          {/* <Slider.Root
          className="relative flex items-center select-none touch-none w-full h-5"
          defaultValue={[hue]}
          max={360}
          step={1}
          onValueChange={(e) => setHue(e[0])}
        >
          <Slider.Track className="bg-blackA10 relative grow rounded-full h-[3px]">
            <Slider.Range className="absolute bg-primary rounded-full h-full" />
          </Slider.Track>
          <Slider.Thumb
            className="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
            aria-label="Colour"
          />
        </Slider.Root>
        <Slider.Root
          className="relative flex items-center select-none touch-none w-full h-5"
          defaultValue={[rotate]}
          max={200}
          step={1}
          onValueChange={(e) => setRotate(e[0])}
        >
          <Slider.Track className="bg-blackA10 relative grow rounded-full h-[3px]">
            <Slider.Range className="absolute bg-primary rounded-full h-full" />
          </Slider.Track>
          <Slider.Thumb
            className="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
            aria-label="Volume"
          />
        </Slider.Root>

        <Slider.Root
          className="relative flex items-center select-none touch-none w-full h-5"
          defaultValue={[70]}
          max={100}
          step={1}
        >
          <Slider.Track className="bg-blackA10 relative grow rounded-full h-[3px]">
            <Slider.Range className="absolute bg-primary rounded-full h-full" />
          </Slider.Track>
          <Slider.Thumb
            className="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
            aria-label="Volume"
          />
        </Slider.Root> */}
        </section>
      </main>
    </div>
  );
}
