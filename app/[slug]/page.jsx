import client from "@/client";
import Content from "@/components/content";

export default async function Page({ params }) {
  const page = await client.fetch(
    `*[_type == "page" && slug.current == "${params.slug}"][0]`
  );
  return (
    <div className="mb-48">
      <h1 className="text-center my-16">{page.title}</h1>
      {page.body && <Content value={page.body} />}
    </div>
  );
}

export async function generateStaticParams() {
  const pages = await client.fetch(
    `*[_type == "page" && defined(slug.current)][]{
      "params": { "slug": slug.current }
    }`
  );

  return pages;
}
