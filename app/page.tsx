import Image from "next/image";
import Intro from "../components/intro";
import AccordionUI from "../Layout/ui/accordion";

export default function Home() {
  return (
    <main className="rounded-lg bg-green-600 p-6 text-white text-center">
      <h2 className="text-2xl font-bold">&lt;main&gt;</h2>

      <section className="mt-6 rounded-lg bg-yellow-600 p-6">
        <h3 className="text-xl font-semibold">&lt;section&gt;</h3>
        <div className="mt-4">
          <Intro />
          <AccordionUI />
        </div>
      </section>
        <Image
          src="/globe.svg"
          alt="Globe"
          width={500}
          height={300}
        />


      <section className="mt-6 rounded-lg bg-yellow-600 p-6">
        <h3 className="text-xl font-semibold">&lt;section&gt;</h3>
        <div className="mt-4">
          <Intro />
          <AccordionUI />
        </div>
      </section>
    </main>
  );
}
