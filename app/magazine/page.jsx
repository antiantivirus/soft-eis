import client from "../../client";
import Link from "next/link";
import SanityImage from "@/components/sanityImage";

export const metadata = {
  title: "Magazine - SOFT EIS Magazine",
};

export default async function Magazines() {
  const magazines = await client.fetch(
    `*[_type == "magazine"] | order(publishedAt desc)`
  );
  return (
    <section className="mb-48">
      <h1 className="text-center my-16">MAGAZINE</h1>
      <ul>
        {magazines.map((magazine) => (
          <li key={magazine._id} className="max-w-lg mx-auto mb-14">
            <article>
              <Link
                key={magazine._id}
                href={`/magazine/${magazine.slug.current}`}
              >
                <span className="text-center text-medium block mb-6">
                  {magazine.title}
                </span>
                <SanityImage image={magazine.cover} />
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
