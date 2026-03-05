import Image from "next/image";

export default function About() {
  return (
    <main className="rounded-lg bg-green-600 p-6 text-white text-center">
      <h2 className="text-2xl font-bold">&lt;About&gt;</h2>

      <section className="mt-6 rounded-lg bg-yellow-600 p-6">
        <h3 className="text-xl font-semibold">About Page</h3>
        <p className="mt-4">Welcome to the about page.</p>
        <div className="mt-6 flex justify-center">
          <Image
            src="/next.svg"
            alt="About"
            width={200}
            height={200}
            className="rounded-lg"
          />
        </div>
      </section>
    </main>
  );
}
