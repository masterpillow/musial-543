import Intro from "../components/intro";

export default function Home() {
  return (
    <main className="rounded-lg bg-green-600 p-6 text-white text-center">
      <h2 className="text-2xl font-bold">&lt;main&gt;</h2>

      <section className="mt-6 rounded-lg bg-yellow-600 p-6">
        <h3 className="text-xl font-semibold">&lt;section&gt;</h3>
        <div className="mt-4">
          <Intro />
        </div>
      </section>

      <section className="mt-6 rounded-lg bg-yellow-600 p-6">
        <h3 className="text-xl font-semibold">&lt;section&gt;</h3>
        <div className="mt-4">
          <Intro />
        </div>
      </section>
    </main>
  );
}
