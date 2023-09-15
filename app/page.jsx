import Image from "next/image";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <section className="">
        <Image src="/issue03.jpg" alt="" width={300} height={380} />
        <div className="h-8 w-full bg-primary">SLIDE TO PRE-ORDER</div>
      </section>
    </main>
  );
}
