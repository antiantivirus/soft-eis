import Image from "next/image";
import SlideTo from "@/components/slideTo";
export default function Home() {
  return (
    <main className="grid place-items-center min-h-screen">
      <section className="w-1/2">
        <Image
          priority={true}
          src="/issue03.jpg"
          alt=""
          width={500}
          height={800}
        />
        <SlideTo />
      </section>
    </main>
  );
}
