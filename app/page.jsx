"use client";
import Image from "next/image";
import SlideTo from "@/components/slideTo";
import Link from "next/link";
import Head from "next/head";
import Navigation from "@/components/navigation";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="grid place-items-center min-h-screen">
      <section>
        <div className="w-full mb-8 lg:fixed lg:max-w-[400px] lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-y-2/3 lg:-translate-x-1/2 lg:w-1/3 z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ originX: 0.5, originY: 0.5 }}
            transition={{ duration: 0.7, delay: 0.8, type: "spring" }}
          >
            <Image
              priority={true}
              src="/issue03.jpg"
              alt=""
              width={800}
              height={1200}
            />
            {/* <SlideTo
              className={"fixed bottom-0 lg:bottom-auto lg:flex w-full left-0"}
            /> */}
          </motion.div>
        </div>
        <p className="bg-secondary text-primary text-center p-10 rounded-full lg:fixed bottom-16 right-40 z-30 border-black border">
          ISSUE03 IS HERE!
          <br />
          SWIPE TO PRE-ORDER
        </p>
        <Link
          href="shop/issue03"
          className="bg-primary p-5 rounded-full -ml-10 lg:fixed bottom-[180px] right-24 block z-30 rotate-12 origin-center border-black border"
        >
          OR CLICK RIGHT HERE
        </Link>
        <div className="flex justify-between items-center lg:block my-8">
          <Image
            className="lg:fixed top-10 left-10 lg:z-10 h-full lg:h-auto"
            src="/blobs.png"
            width={80}
            height={160}
            alt=""
          />
          <Image
            className="lg:fixed bottom-[5%] left-[40%] lg:z-10 h-full lg:h-auto"
            src="/star-fish.png"
            width={80}
            height={80}
            alt=""
          />
          <Image
            className="lg:fixed top-[13%] left-[18%] lg:z-10 h-full lg:h-auto"
            src="/sad-apple.png"
            width={50}
            height={50}
            alt=""
          />
          <Image
            className="lg:fixed top-[8%] right-[10%] lg:z-10 h-full lg:h-auto"
            src="/keychain.png"
            width={90}
            height={140}
            alt=""
          />
        </div>
        <Navigation className="block lg:hidden mb-24" />
      </section>
    </main>
  );
}
