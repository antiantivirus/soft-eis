import Image from "next/image";
import { Logo } from "@/icons/logo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="-mt-56">
        <Image src="/issue02.jpg" alt="" width={300} height={380} />
      </section>
    </main>
  );
}
