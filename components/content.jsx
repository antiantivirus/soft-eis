import { PortableText } from "@portabletext/react";
import SanityImage from "./sanityImage";

// Barebones lazy-loaded image component
const ImageComponent = ({ value }) => {
  return <SanityImage image={value} />;
};

const components = {
  types: {
    image: ImageComponent,
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
  block: {
    normal: ({ children }) => (
      <p className="max-w-prose w-full my-4 mx-auto">{children}</p>
    ),
  },
};

export default function Content({ value }) {
  return <PortableText value={value} components={components} />;
}
