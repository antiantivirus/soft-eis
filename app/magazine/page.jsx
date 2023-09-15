import client from "../../client";
import Link from "next/link";
import SanityImage from "@/components/sanityImage";

export default async function Magazines() {
  const magazines = await client.fetch(
    `
    *[_type == "magazine"]
  `
  );
  return (
    <main>
      <section className="">
        <h1 className="text-center mb-16">Magazine</h1>
        {magazines.map((magazine) => (
          <ul>
            <li className="max-w-lg mx-auto mb-12">
              <article>
                <Link key={magazine._id} href="/magazine/issue02-identity">
                  <p className="text-center">{magazine.title}</p>
                  <SanityImage image={magazine.cover} />
                </Link>
              </article>
            </li>
          </ul>
        ))}
      </section>
    </main>
  );
}
