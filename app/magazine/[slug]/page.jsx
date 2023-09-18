import client from "../../../client";
import Content from "@/components/content";

export default async function Magazine({ params }) {
  const magazine = await client.fetch(
    `*[_type == "magazine" && slug.current == "${params.slug}"][0]`
  );
  return (
    <main className="">
      <h1 className="text-center my-16">{magazine.title}</h1>
      {magazine.body && <Content value={magazine.body} />}
    </main>
  );
}

export async function generateStaticParams() {
  const magazines = await client.fetch(
    `*[_type == "magazine" && defined(slug.current)][]{
      "params": { "slug": slug.current }
    }`
  );

  return magazines;
}
