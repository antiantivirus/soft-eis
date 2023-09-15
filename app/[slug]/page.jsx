import client from "@/client";
import Content from "@/components/content";

export default async function Page({ params: { slug } }) {
  const page = await client.fetch(
    `*[_type == "page" && slug.current == "a-z"][0]`
  );
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>{page.title}</h1>
      {page.body && <Content value={page.body} />}
    </main>
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
