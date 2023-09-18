"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import urlBuilder from "@sanity/image-url";
import client from "../client";

export default function PreOrder({ product }) {
  return (
    <div className="w-full mt-20 mb-8 lg:mt-0 lg:mb-8 lg:fixed lg:max-w-[400px] lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-y-1/2 lg:-translate-x-1/2 lg:w-1/3 lg:z-10">
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
          className="mb-8 lg:mb-4"
        />
        <button
          className="snipcart-add-item bg-primary w-full text-black text-center text-[1.4rem] lg:text-[1.6rem] rounded-full border-black border relative enlarge"
          data-item-id={product.sku}
          data-item-name={product.title}
          data-item-price={product.price}
          data-item-description={product.shortDescription}
          data-item-url={`/shop/${product.slug.current}`}
          data-item-image={urlBuilder(client)
            .image(product.cover)
            .width(200)
            .fit("max")
            .auto("format")
            .url()}
        >
          <span className="shimmer py-2 block">PRE-ORDER ISSUE03 NOW</span>
          <Image
            className="absolute left-0 lg:left-[-20px] bottom-[-20px] lg:z-10 w-auto"
            src="/star-fish.png"
            width={80}
            height={80}
            alt=""
          />
          <Image
            src="/star.png"
            className="absolute right-0 lg:right-[-20px] top-[-20px] lg:z-10 w-auto"
            width={40}
            height={40}
            alt=""
          />
        </button>
        {/* <SlideTo
              className={"fixed bottom-0 lg:bottom-auto lg:flex w-full left-0"}
            /> */}
      </motion.div>
    </div>
  );
}
