import Container from "../components/Container";
import Link from "next/link";

const services = [
  {
    title: "Business Website (5 pages)",
    desc: "Modern site for contractors, gyms, salons, local shops. Built to look premium and get you more inquiries.",
    bullets: [
      "Home + Services + About + Reviews + Contact",
      "Mobile-first",
      "Fast load",
      "SEO basics",
    ],
  },
  {
    title: "Landing Page (1 page)",
    desc: "Perfect for a single offer: “Get a quote”, “Book now”, “Free consult”. Built for conversion.",
    bullets: [
      "Clear offer + CTA",
      "Testimonials section",
      "Simple lead capture",
      "Analytics-ready",
    ],
  },
  {
    title: "Fix / Improve Existing Site",
    desc: "Speed, design cleanup, mobile issues, broken forms, SEO structure. I’ll tighten it up.",
    bullets: [
      "Performance fixes",
      "Mobile improvements",
      "Copy/CTA improvements",
      "Bug fixes",
    ],
  },
];

export default function Services() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">Services</h1>
      <p className="mt-2 text-zinc-300">
        Straightforward options for local businesses. Clean design, fast load
        times, and lead capture that works.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6"
          >
            <h2 className="text-lg font-semibold">{s.title}</h2>
            <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
              {s.desc}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">
        <h3 className="text-xl font-semibold">Not sure what you need?</h3>
        <p className="mt-2 text-zinc-300">
          Send your current website (or describe your business) and I’ll
          recommend the fastest, best-value option.
        </p>
        <div className="mt-5">
          <Link
            href="/contact"
            className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-200"
          >
            Request a quote
          </Link>
        </div>
      </div>
    </Container>
  );
}
