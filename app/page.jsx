import Image from "next/image";
import SlideTo from "@/components/slideTo";
import Link from "next/link";
import Head from "next/head";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <main className="grid place-items-center min-h-screen">
      <section>
        <div className="mb-8 lg:fixed lg:max-w-[400px] lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-y-2/3 lg:-translate-x-1/2 lg:w-1/2 z-10">
          <Image
            priority={true}
            src="/issue03.jpg"
            alt=""
            width={400}
            height={600}
          />
          <SlideTo
            className={"fixed bottom-0 lg:bottom-auto lg:flex w-full left-0"}
          />
        </div>
        <p className="bg-secondary text-primary text-center p-10 rounded-full lg:fixed bottom-16 right-40 z-30 border-black border">
          ISSUE03 IS HERE!
          <br />
          SWIPE TO PRE-ORDER
        </p>
        <Link
          href="shop/issue03-loss"
          className="bg-primary p-5 rounded-full -ml-10 lg:fixed bottom-[180px] right-24 block z-30 rotate-12 origin-center border-black border"
        >
          OR CLICK RIGHT HERE
        </Link>
        <div className="flex justify-between lg:block my-8">
          <Image
            className="lg:fixed top-10 left-10 z-10"
            src="/blobs.png"
            width={80}
            height={160}
            alt=""
          />
          <Image
            className="lg:fixed bottom-[5%] left-[40%] z-10"
            src="/star-fish.png"
            width={80}
            height={80}
            alt=""
          />
          <Image
            className="lg:fixed top-[13%] left-[18%] z-10"
            src="/sad-apple.png"
            width={50}
            height={50}
            alt=""
          />
          <Image
            className="lg:fixed top-[8%] right-[10%] z-10"
            src="/keychain.png"
            width={90}
            height={90}
            alt=""
          />
        </div>
        <Navigation className="block lg:hidden mb-24" />
        <div
          style={{
            background:
              "linear-gradient(0deg, #F6C859 0%, rgba(192, 192, 192, 0.00) 61.46%)",
          }}
          className="fixed bottom-0 left-0 w-screen h-[50vh] z-0 pointer-events-none"
        ></div>
      </section>
    </main>
  );
}
