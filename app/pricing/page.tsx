import Container from "../components/Container";
import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    price: "$249-$499",
    bestFor: "Simple 1–3 page sites",
    items: [
      "Landing page or basic site",
      "Mobile-first design",
      "Contact form",
      "Deploy + basic SEO",
    ],
  },
  {
    name: "Growth",
    price: "$649-$1,499",
    bestFor: "Most local businesses",
    items: [
      "5-page website",
      "Reviews section",
      "Gallery/portfolio",
      "SEO structure + performance pass",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "$1,500+",
    bestFor: "Custom builds + advanced needs",
    items: [
      "Custom UI",
      "Advanced forms/flows",
      "Integrations",
      "Ongoing support options",
    ],
  },
];

export default function Pricing() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">Pricing</h1>
      <p className="mt-2 text-zinc-300">
        Transparent ranges so you can plan. Final price depends on pages,
        content, and features.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={[
              "rounded-3xl border bg-zinc-900/40 p-6",
              t.featured ? "border-zinc-600" : "border-zinc-800",
            ].join(" ")}
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-semibold">{t.name}</h2>
                <p className="mt-1 text-sm text-zinc-400">{t.bestFor}</p>
              </div>
              {t.featured && (
                <span className="rounded-full border border-zinc-700 bg-zinc-950/60 px-3 py-1 text-xs text-zinc-200">
                  Most Popular
                </span>
              )}
            </div>

            <p className="mt-4 text-2xl font-semibold">{t.price}</p>

            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              {t.items.map((i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
                  {i}
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-200"
            >
              Get a quote
            </Link>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs text-zinc-500">
        Tip: If you’re an early client, I can offer a discount in exchange for a
        short testimonial and permission to showcase the project.
      </p>
    </Container>
  );
}
