import Container from "../components/Container";
import Link from "next/link";

export default function Work() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">Work</h1>
      <p className="mt-2 text-zinc-300">
        No big public case studies yet — but here are demo builds and example
        sites showing the kind of work I deliver for local businesses.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {/* FEATURED DEMO */}
        <Link
          href="/work/the-rooster-tail"
          className="group rounded-3xl border border-zinc-700 bg-zinc-900/50 p-6 hover:bg-zinc-900/70 transition"
        >
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg font-semibold">
              The Rooster Tail Hair Salon (Demo)
            </h3>
            <span className="rounded-full border border-zinc-700 bg-zinc-950/60 px-3 py-1 text-xs text-zinc-300">
              Featured Demo
            </span>
          </div>

          <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
            Friendly local salon website designed to drive calls and bookings.
            Includes services, pricing, reviews, gallery, hours, and strong
            CTAs.
          </p>

          <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-300">
            {[
              "Salon website",
              "Calls & bookings",
              "Mobile-first",
              "Trust-focused",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1"
              >
                {t}
              </span>
            ))}
          </div>

          <p className="mt-4 text-xs text-zinc-400 group-hover:text-zinc-300">
            View full demo →
          </p>
        </Link>

        {/* OTHER SAMPLE IDEAS */}
        {[
          {
            title: "Contractor Lead-Gen Site (Sample)",
            desc: "Services pages, before/after gallery, click-to-call, contact form, and Google Map embed.",
            tags: ["5 pages", "Fast", "Mobile-first"],
          },
          {
            title: "Gym / Trainer Landing Page (Sample)",
            desc: "Strong hero, offer section, testimonials, pricing tiers, and a simple booking CTA.",
            tags: ["Conversion", "Clean design", "SEO basics"],
          },
          {
            title: "Restaurant / Cafe Site (Sample)",
            desc: "Menu, hours, location, online ordering link, and social proof focus.",
            tags: ["Simple", "Modern", "Easy updates"],
          },
          {
            title: "Local Shop / Service Site (Sample)",
            desc: "Products/services grid, FAQs, reviews, and contact + inquiry form.",
            tags: ["Trust-building", "Clear copy", "Fast load"],
          },
        ].map((p) => (
          <div
            key={p.title}
            className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 hover:bg-zinc-900/60 transition"
          >
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
              {p.desc}
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-300">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">
        <h2 className="text-xl font-semibold">
          Want to be my first public case study?
        </h2>
        <p className="mt-2 text-zinc-300">
          I can offer an early-client discount in exchange for a short
          testimonial and permission to showcase the final build.
        </p>
        <div className="mt-5">
          <Link
            href="/contact"
            className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-200"
          >
            Let’s talk
          </Link>
        </div>
      </div>
    </Container>
  );
}
