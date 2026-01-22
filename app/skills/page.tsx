import Container from "../components/Container";

export default function Skills() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">Skills</h1>
      <p className="mt-2 text-zinc-300">
        Tools I use to build fast, modern websites and web apps.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {[
          ["Frontend", ["React", "Next.js", "TypeScript", "Tailwind CSS"]],
          ["Backend", ["Node.js", "Express", "REST APIs", "Auth basics"]],
          [
            "Delivery",
            [
              "Git/GitHub",
              "Vercel Deployments",
              "Performance/SEO basics",
              "Analytics-ready",
            ],
          ],
        ].map(([title, items]) => (
          <div
            key={title as string}
            className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6"
          >
            <h2 className="font-semibold">{title as string}</h2>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              {(items as string[]).map((i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  );
}
