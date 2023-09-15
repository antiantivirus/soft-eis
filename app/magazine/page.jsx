import client from "../../client";
import Link from "next/link";

export default async function Magazines() {
  const magazines = await client.fetch(
    `
    *[_type == "magazine"]
  `
  );
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <section className="">
        {magazines.map((magazine) => (
          <Link key={magazine._id} href="/magazine/issue02-identity">
            {magazine.slug.current}
          </Link>
        ))}
      </section>
    </main>
  );
}
