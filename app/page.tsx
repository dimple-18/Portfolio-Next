import HeroLike from "@/components/HeroLike";

export default function Home() {
  return (
    <main>
      <HeroLike />
      <section id="contact" className="mx-auto max-w-6xl px-5 py-24 text-white">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          Contact section (next)
        </div>
      </section>
    </main>
  );
}