import Link from "next/link";

const services = [
  {
    name: "Women’s Haircut",
    price: "From $45",
    note: "Wash + style available",
  },
  { name: "Men’s Haircut", price: "From $30", note: "Clean + classic" },
  { name: "Kids Cut", price: "From $25", note: "Ages 12 & under" },
  { name: "Color (All-Over)", price: "From $95", note: "Consult recommended" },
  { name: "Highlights", price: "From $130", note: "Partial / full available" },
  { name: "Blowout", price: "From $40", note: "Smooth + volume" },
];

const reviews = [
  {
    quote:
      "Best haircut I’ve had in years. Super friendly, great attention to detail, and the vibe is always relaxing.",
    name: "Local Client",
  },
  {
    quote:
      "They really listen to what you want. My color turned out perfect and it still looks amazing weeks later.",
    name: "Repeat Customer",
  },
  {
    quote:
      "Easy to book, on time, and I always leave feeling confident. Highly recommend.",
    name: "New Client",
  },
];

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-6xl px-6 py-12">{children}</div>;
}

const brand = {
  bg: "bg-[#FAF7F2]",
  text: "text-[#2E2A27]",
  muted: "text-[#6A625C]",
  border: "border-[#E4DED6]",
  card: "bg-white",
  soft: "bg-[#F3EFE9]",
  accent: "#7B3F2E",
};

export default function RoosterTailDemo() {
  return (
    <main className={`min-h-screen ${brand.bg} ${brand.text}`}>
      {/* Demo banner */}
      <div className="bg-[#7B3F2E] text-white text-center text-xs py-2">
        Example website (Demo) • Design + development by Tate Sutter
      </div>

      {/* Local header/nav (separate from your portfolio nav) */}
      <header
        className={`sticky top-0 z-40 border-b ${brand.border} bg-[#FAF7F2]/80 backdrop-blur`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-sm font-semibold tracking-wide">
              The Rooster Tail
            </p>
            <p className={`text-xs ${brand.muted}`}>
              Hair Salon • Your Town, KS
            </p>
          </div>

          <nav
            className={`hidden items-center gap-6 text-sm md:flex ${brand.muted}`}
          >
            <a className="hover:text-[#2E2A27]" href="#services">
              Services
            </a>
            <a className="hover:text-[#2E2A27]" href="#reviews">
              Reviews
            </a>
            <a className="hover:text-[#2E2A27]" href="#book">
              Booking
            </a>
            <a className="hover:text-[#2E2A27]" href="#contact">
              Contact
            </a>
          </nav>

          <a
            href="#book"
            className="rounded-xl bg-[#7B3F2E] px-4 py-2 text-sm font-medium text-white hover:bg-[#693527]"
          >
            Book Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="border-b border-[#E4DED6]">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-[#E4DED6] bg-white px-3 py-1 text-xs text-[#6A625C]">
                Friendly local salon • Cuts • Color • Styling
              </p>

              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-wide md:text-5xl">
                Feel confident the moment you walk out.
              </h1>

              <p className={`mt-4 leading-relaxed ${brand.muted}`}>
                The Rooster Tail is a welcoming neighborhood salon focused on
                clean cuts, beautiful color, and a comfortable experience. Book
                in minutes — we’ll take care of the rest.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#book"
                  className="rounded-xl bg-[#7B3F2E] px-5 py-3 text-sm font-medium text-white hover:bg-[#693527]"
                >
                  Book Appointment
                </a>

                <a
                  href="#services"
                  className="rounded-xl border border-[#7B3F2E] px-5 py-3 text-sm font-medium text-[#7B3F2E] hover:bg-[#7B3F2E] hover:text-white transition"
                >
                  View Services
                </a>

                <a
                  href="#contact"
                  className="rounded-xl border border-[#E4DED6] bg-white px-5 py-3 text-sm font-medium hover:bg-[#F3EFE9] transition"
                >
                  Call / Directions
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  ["Easy booking", "Call, text, or online"],
                  ["Warm & welcoming", "Comfortable vibe"],
                  ["Local trust", "Built for community"],
                ].map(([t, d]) => (
                  <div
                    key={t}
                    className={`rounded-2xl border ${brand.border} ${brand.card} p-4`}
                  >
                    <p className="text-sm font-medium tracking-wide">{t}</p>
                    <p className={`mt-1 text-xs ${brand.muted}`}>{d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery placeholder */}
            <div
              className={`rounded-3xl border ${brand.border} ${brand.card} p-6`}
            >
              <div
                className={`rounded-2xl border ${brand.border} ${brand.soft} p-5`}
              >
                <p className={`text-xs ${brand.muted}`}>
                  Gallery (replace with real photos)
                </p>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className={`aspect-square rounded-2xl border ${brand.border} bg-white`}
                      title="Swap with real salon photos later"
                    />
                  ))}
                </div>
                <p className={`mt-4 text-xs ${brand.muted}`}>
                  Pro tip: real photos instantly boost bookings for local
                  businesses.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ABOUT + HOURS */}
      <section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 md:items-start">
            <div
              className={`rounded-3xl border ${brand.border} ${brand.card} p-6`}
            >
              <h2 className="text-2xl font-semibold tracking-wide">About</h2>
              <p className={`mt-3 leading-relaxed ${brand.muted}`}>
                We’re here for the people who want a salon that’s friendly,
                consistent, and easy to book. Whether you need a quick trim or a
                full refresh, we’ll make sure you leave feeling like your best
                self.
              </p>
              <p className={`mt-3 leading-relaxed ${brand.muted}`}>
                This demo site is designed to make it easy for new clients to
                understand services, pricing, and how to book — without the
                back-and-forth.
              </p>
            </div>

            <div
              className={`rounded-3xl border ${brand.border} ${brand.card} p-6`}
            >
              <h3 className="text-lg font-semibold tracking-wide">Hours</h3>
              <div className={`mt-3 space-y-2 text-sm ${brand.muted}`}>
                <div className="flex justify-between">
                  <span>Mon</span>
                  <span>Closed</span>
                </div>
                <div className="flex justify-between">
                  <span>Tue–Fri</span>
                  <span>9:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sat</span>
                  <span>9:00 AM – 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sun</span>
                  <span>Closed</span>
                </div>
              </div>

              <div
                className={`mt-5 rounded-2xl border ${brand.border} ${brand.soft} p-4`}
              >
                <p className="text-xs font-medium tracking-wide">Walk-ins?</p>
                <p className={`mt-1 text-xs ${brand.muted}`}>
                  Recommended to book ahead — but we’ll do our best to fit you
                  in.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t border-[#E4DED6]">
        <Container>
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-wide">Services</h2>
              <p className={`mt-2 ${brand.muted}`}>
                Clear pricing makes booking easier — and helps new clients feel
                confident.
              </p>
            </div>

            <a
              href="#book"
              className="w-fit rounded-xl bg-[#7B3F2E] px-5 py-3 text-sm font-medium text-white hover:bg-[#693527]"
            >
              Book now →
            </a>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.name}
                className={`rounded-3xl border ${brand.border} ${brand.card} p-6`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold tracking-wide">{s.name}</p>
                    <p className={`mt-1 text-sm ${brand.muted}`}>{s.note}</p>
                  </div>
                  <p className="text-sm font-semibold">{s.price}</p>
                </div>
              </div>
            ))}
          </div>

          <p className={`mt-4 text-xs ${brand.muted}`}>
            Pricing shown is an example — replace with the salon’s real service
            list anytime.
          </p>
        </Container>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="border-t border-[#E4DED6]">
        <Container>
          <h2 className="text-2xl font-semibold tracking-wide">Reviews</h2>
          <p className={`mt-2 ${brand.muted}`}>
            Add real Google reviews here later. Social proof is huge for local
            business conversions.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {reviews.map((r) => (
              <div
                key={r.quote}
                className={`rounded-3xl border ${brand.border} ${brand.card} p-6`}
              >
                <p className={`text-sm leading-relaxed ${brand.text}`}>
                  “{r.quote}”
                </p>
                <p className={`mt-4 text-xs ${brand.muted}`}>— {r.name}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* BOOKING */}
      <section id="book" className="border-t border-[#E4DED6]">
        <Container>
          <div
            className={`rounded-3xl border ${brand.border} ${brand.soft} p-8`}
          >
            <h2 className="text-2xl font-semibold tracking-wide">
              Book an appointment
            </h2>
            <p className={`mt-2 ${brand.muted}`}>
              This can link to Square, Vagaro, Fresha — or a simple booking
              request form.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+15555555555"
                className="rounded-xl bg-[#7B3F2E] px-5 py-3 text-sm font-medium text-white hover:bg-[#693527]"
              >
                Call to Book
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-[#7B3F2E] bg-white px-5 py-3 text-sm font-medium text-[#7B3F2E] hover:bg-[#7B3F2E] hover:text-white transition"
              >
                Contact / Directions
              </a>

              <Link
                href="/contact"
                className="rounded-xl border border-[#E4DED6] bg-white px-5 py-3 text-sm font-medium hover:bg-[#F3EFE9] transition"
              >
                Use your site’s form →
              </Link>
            </div>

            <p className={`mt-4 text-xs ${brand.muted}`}>
              Replace the phone number and booking method with the salon’s real
              info.
            </p>
          </div>
        </Container>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-[#E4DED6]">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            <div
              className={`rounded-3xl border ${brand.border} ${brand.card} p-6`}
            >
              <h2 className="text-lg font-semibold tracking-wide">Visit us</h2>
              <p className={`mt-2 text-sm ${brand.muted}`}>
                123 Main St, Your Town, KS
              </p>
              <p className={`mt-2 text-sm ${brand.muted}`}>
                <a
                  className="underline underline-offset-4 hover:text-[#2E2A27]"
                  href="tel:+15555555555"
                >
                  (555) 555-5555
                </a>
              </p>

              <div
                className={`mt-5 rounded-2xl border ${brand.border} ${brand.soft} p-4`}
              >
                <p className={`text-xs ${brand.muted}`}>Map placeholder</p>
                <div
                  className={`mt-3 h-44 rounded-2xl border ${brand.border} bg-white`}
                />
                <p className={`mt-3 text-xs ${brand.muted}`}>
                  Replace with a Google Map embed once you have the real
                  address.
                </p>
              </div>
            </div>

            <div
              className={`rounded-3xl border ${brand.border} ${brand.card} p-6`}
            >
              <h2 className="text-lg font-semibold tracking-wide">
                Why this demo works
              </h2>
              <ul className={`mt-3 space-y-2 text-sm ${brand.muted}`}>
                {[
                  "Light, friendly branding (separate from the developer portfolio)",
                  "Clear services + pricing reduces friction",
                  "Reviews build trust quickly for new clients",
                  "Strong CTAs: book, call, directions",
                  "Mobile-first layout for local search traffic",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#7B3F2E]" />
                    {i}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/work"
                  className="rounded-xl border border-[#E4DED6] bg-white px-5 py-3 text-sm font-medium hover:bg-[#F3EFE9] transition"
                >
                  Back to Work →
                </Link>

                <Link
                  href="/contact"
                  className="rounded-xl bg-[#7B3F2E] px-5 py-3 text-sm font-medium text-white hover:bg-[#693527]"
                >
                  Build a site like this
                </Link>
              </div>
            </div>
          </div>

          <footer className={`mt-12 pb-10 text-center text-xs ${brand.muted}`}>
            © {new Date().getFullYear()} The Rooster Tail (Demo). Built by Tate
            Sutter.
          </footer>
        </Container>
      </section>
    </main>
  );
}
