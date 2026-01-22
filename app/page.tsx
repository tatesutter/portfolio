import Link from "next/link";
import Container from "./components/Container";

export default function Home() {
  return (
    <Container>
      <section className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Modern websites for local businesses that want more calls, leads,
            and customers.
          </h1>

          <p className="mt-5 text-zinc-300 leading-relaxed">
            I help local businesses look professional online with fast,
            mobile-friendly websites that make it easy for customers to contact
            you, request a quote, or book a service.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-200"
            >
              Get a Quote
            </Link>
            <Link
              href="/work"
              className="rounded-xl border border-zinc-800 bg-zinc-900/40 px-5 py-3 text-sm font-medium hover:bg-zinc-900"
            >
              View Work
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 text-xs text-zinc-300">
            {[
              "⚡ Fast & responsive",
              "✅ Mobile-first",
              "📍 Local-business focused",
              "🧾 Simple pricing options",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-2xl">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <p className="text-xs text-zinc-400">What I can build</p>
            <h3 className="mt-2 text-xl font-semibold">
              Business Website Starter
            </h3>
            <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
              A clean 5-page site with contact form, services, reviews section,
              and SEO basics. Perfect for contractors, gyms, salons, and local
              shops.
            </p>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {[
                ["1–2 weeks", "Typical turnaround"],
                ["Mobile-first", "Looks great on phones"],
                ["SEO basics", "Titles, metadata, structure"],
                ["Lead capture", "Form + click-to-call"],
              ].map(([a, b]) => (
                <div
                  key={a}
                  className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4"
                >
                  <p className="text-sm font-medium">{a}</p>
                  <p className="mt-1 text-xs text-zinc-400">{b}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-200"
              >
                Request Quote
              </Link>
              <Link
                href="/process"
                className="rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-2 text-sm font-medium hover:bg-zinc-900"
              >
                See Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-16 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Tate Sutter. Built with Next.js.
      </footer>
    </Container>
  );
}
