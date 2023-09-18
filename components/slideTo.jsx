"use client";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import Image from "next/image";

export default function SlideTo({ className }) {
  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [0, 250],
    ["#F6C859", "rgb(110, 168, 219)"]
  );

  useMotionValueEvent(x, "change", (latest) => {
    console.log("x changed to", latest);
    if (latest > 250) {
      //change the route
    }
  });

  return (
    <motion.div
      style={{ background }}
      className={"flex gap-4 p-4 " + className}
    >
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.9}
        style={{ x }}
        className="cursor-grab"
      ></motion.div>
      <span className="shimmer mx-auto px-4 font-medium text-[1.7rem]">
        SWIPE TO PRE-ORDER
      </span>
    </motion.div>
  );
}
