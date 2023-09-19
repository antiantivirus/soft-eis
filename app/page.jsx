import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/navigation";
import PreOrder from "../components/preOrder";
import client from "../client";

export default async function Home() {
  const product = await client.fetch(
    `*[_type == "product" && slug.current == "issue03"][0]`
  );
  return (
    <main className="grid place-items-center min-h-screen">
      <section>
        <PreOrder product={product} />
        <Link
          href="/shop/issue03"
          className="enlarge mb-16 lg:mb-0 block w-max mx-auto lg:fixed lg:bottom-[15%] lg:right-[18%] lg:z-10 h-full lg:h-auto"
        >
          <Image
            className="mx-auto"
            src="/find-out-more.png"
            width={120}
            height={180}
            alt="Find out more"
          />
        </Link>

        <div className="hidden justify-between items-center lg:block my-8">
          <Image
            className="lg:fixed top-10 left-10 lg:z-10 h-full lg:h-auto"
            src="/blobs.png"
            width={80}
            height={160}
            alt=""
          />
          <Image
            className="lg:fixed top-[10%] right-[8%] lg:z-10 h-full lg:h-auto"
            src="/sad-apple.png"
            width={50}
            height={50}
            alt=""
          />
        </div>
        <Navigation className="block lg:hidden mb-24" />
      </section>
    </main>
  );
}
