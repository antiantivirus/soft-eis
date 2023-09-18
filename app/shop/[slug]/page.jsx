import client from "../../../client";
import Content from "@/components/content";
import SanityImage from "@/components/sanityImage";

export default async function Product({ params }) {
  const product = await client.fetch(
    `*[_type == "product" && slug.current == "${params.slug}"][0]`
  );
  return (
    <div>
      <h1 className="text-center my-16">{product.title}</h1>
      <div className="max-w-md mx-auto mb-16">
        <SanityImage image={product.cover} />
        <div className="flex justify-between items-center">
          <p>€{product.price}</p>
          <button
            className="snipcart-add-item bg-primary py-2 px-6 rounded-full"
            data-item-id={product.sku}
            data-item-name={product.title}
            data-item-price={product.price}
            data-item-description={product.shortDescription}
            data-item-url={`/shop/${product.slug.current}`}
          >
            Add to cart
          </button>
        </div>
      </div>

      {product.body && <Content value={product.body} />}
    </div>
  );
}

export async function generateStaticParams() {
  const products = await client.fetch(
    `*[_type == "product" && defined(slug.current)][]{
      "params": { "slug": slug.current }
    }`
  );

  return products;
}
