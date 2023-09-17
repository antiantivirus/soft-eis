import Image from "next/image";
import SlideTo from "@/components/slideTo";
export default function Home() {
  return (
    <main className="grid place-items-center min-h-screen">
      <section className="fixed max-w-[400px] top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-1/2">
        <div>
          <Image
            priority={true}
            src="/issue03.jpg"
            alt=""
            width={400}
            height={600}
          />
          <SlideTo />
        </div>
      </section>
    </main>
  );
}
