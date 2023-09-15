import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import client from "@/client";
import Image from "next/image";

export default function SanityImage({ image, className }) {
  const { width, height } = getImageDimensions(image);
  const aspectRatio = width / height;
  return (
    <Image
      src={urlBuilder(client)
        .image(image)
        .width(1800)
        .fit("max")
        .auto("format")
        .url()}
      alt={image.alt || " "}
      loading="lazy"
      width={1800}
      height={1800 / aspectRatio}
      style={{
        // Display alongside text if image appears inside a block text span
        display: "block",

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
      className={className + " my-2"}
    />
  );
}
