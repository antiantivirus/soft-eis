import { PortableText } from "@portabletext/react";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import client from "@/client";

// Barebones lazy-loaded image component
const ImageComponent = ({ value }) => {
  const { width, height } = getImageDimensions(value);
  return (
    <img
      src={urlBuilder(client)
        .image(value)
        .width(1200)
        .fit("max")
        .auto("format")
        .url()}
      alt={value.alt || " "}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: "block",

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
      className="my-4"
    />
  );
};

const components = {
  types: {
    image: ImageComponent,
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
  block: {
    normal: ({ children }) => (
      <p className="max-w-prose w-full my-2">{children}</p>
    ),
  },
};

export default function Content({ value }) {
  return <PortableText value={value} components={components} />;
}
