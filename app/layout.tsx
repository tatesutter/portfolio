import "./globals.css";
import Nav from "./components/Nav";

export const metadata = {
  title: "Tate Sutter — Web Developer",
  description: "Freelance web development for local businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-950 text-zinc-100">
        {/* Subtle glow */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -top-24 left-1/2 h-72 w-[48rem] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
        </div>

        <div className="relative">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
