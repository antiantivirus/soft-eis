import client from "../../client";
import Link from "next/link";
import SanityImage from "@/components/sanityImage";

export default async function Magazines() {
  const products = await client.fetch(
    `
    *[_type == "product"]
  `
  );
  return (
    <main>
      <section>
        <h1 className="text-center my-16">SHOP</h1>
        <ul className="">
          {products.map((product) => (
            <li className="max-w-lg mx-auto mb-14">
              <article>
                <span className="text-center text-medium block mb-6">
                  {product.title}
                </span>
                <SanityImage image={product.cover} />
                <div className="flex justify-between items-center">
                  <p>€{product.price}</p>
                  <button
                    className="Snipcart-add-item bg-primary py-2 px-6 rounded-full"
                    data-item-id={product.sku}
                    data-item-image={product.cover}
                    data-item-name={product.title}
                    data-item-price={product.price}
                    data-item-description={product.shortDescription}
                  >
                    Add to cart
                  </button>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
