import client from "../../../client";
import urlBuilder from "@sanity/image-url";
import Content from "@/components/content";
import SanityImage from "@/components/sanityImage";

export default async function Product({ params }) {
  const product = await client.fetch(
    `*[_type == "product" && slug.current == "${params.slug}"][0]`
  );

  return (
    <div className="mb-48">
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
            data-item-weight={product.weight}
            data-item-image={urlBuilder(client)
              .image(product.cover)
              .width(200)
              .fit("max")
              .auto("format")
              .url()}
          >
            Add to cart
          </button>
        </div>
      </div>

      {product.body && <Content value={product.body} />}

      <button
        className="snipcart-add-item bg-primary text-medium my-8 mx-auto py-2 px-6 rounded-full"
        data-item-id={product.sku}
        data-item-name={product.title}
        data-item-price={product.price}
        data-item-description={product.shortDescription}
        data-item-url={`/shop/${product.slug.current}`}
        data-item-weight={product.weight}
        data-item-image={urlBuilder(client)
          .image(product.cover)
          .width(200)
          .fit("max")
          .auto("format")
          .url()}
      >
        Add to cart
      </button>
    </div>
  );
}

export async function generateStaticParams() {
  const products = await client.fetch(
    `*[_type == "product" && defined(slug.current)][]{
      "slug": slug.current
    }`
  );

  return products;
}
