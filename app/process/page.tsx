import Container from "../components/Container";
import Link from "next/link";

export default function Process() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">Process</h1>
      <p className="mt-2 text-zinc-300">
        A simple, professional process that keeps things fast and stress-free.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-4">
        {[
          ["1) Discovery", "Quick call + goals, services, examples you like."],
          ["2) Design", "Wireframe + copy + a clean visual direction."],
          ["3) Build", "Mobile-first build, performance pass, SEO basics."],
          ["4) Launch", "Deploy, domain help, and a simple handoff."],
        ].map(([t, d]) => (
          <div
            key={t}
            className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6"
          >
            <p className="font-medium">{t}</p>
            <p className="mt-2 text-sm text-zinc-300 leading-relaxed">{d}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">
        <h2 className="text-xl font-semibold">Typical timeline</h2>
        <p className="mt-2 text-zinc-300">
          Most local business sites:{" "}
          <span className="text-white">7–14 days</span> depending on content and
          revisions.
        </p>
        <div className="mt-5">
          <Link
            href="/contact"
            className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-200"
          >
            Start a project
          </Link>
        </div>
      </div>
    </Container>
  );
}
