"use client";
import * as Slider from "@radix-ui/react-slider";
import Image from "next/image";

export default function RangeSlider() {
  return (
    <Slider.Root
      className="relative flex items-center select-none touch-none w-full h-10"
      defaultValue={[100]}
      max={300}
      step={1}
    >
      <Slider.Track className="relative grow h-full">
        <Slider.Range className="absolute bg-primary h-full" />
      </Slider.Track>
      <Slider.Thumb
        className="block h-10 p-2 flex items-center bg-white cursor-arrow cursor-col-resize focus:outline-none"
        aria-label="Volume"
      >
        🍦 ISSUE03. PRE-ORDER. SLIDE TO UNLOCK.
      </Slider.Thumb>
    </Slider.Root>
  );
}
