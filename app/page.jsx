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
        {/* <Link
          href="shop/issue03"
          className="text-secoondary p-5 rounded-full mx-auto lg:-ml-10 lg:fixed lg:bottom-[180px] lg:right-24 lg:block z-30 rotate-12 origin-center border-black border"
        >
          FIND OUT MORE
        </Link> */}
        <div className="hidden justify-between items-center lg:block my-8">
          <Image
            className="lg:fixed top-10 left-10 lg:z-10 h-full lg:h-auto"
            src="/blobs.png"
            width={80}
            height={160}
            alt=""
          />
          <Image
            className="lg:fixed top-[25%] left-[18%] lg:z-10 h-full lg:h-auto"
            src="/sad-apple.png"
            width={50}
            height={50}
            alt=""
          />
          <Image
            className="lg:fixed top-[8%] right-[10%] lg:z-10 h-full lg:h-auto"
            src="/keychain.png"
            width={90}
            height={140}
            alt=""
          />
        </div>
        <Navigation className="block lg:hidden mb-24" />
      </section>
    </main>
  );
}
