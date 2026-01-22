"use client";

import { useState } from "react";
import Container from "../components/Container";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    // Honeypot (bots fill this; humans won't see it)
    company: "",
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus("error");
        setError(data?.error || "Something went wrong.");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "", company: "" });
    } catch (err) {
      setStatus("error");
      setError("Network error. Try again.");
    }
  };

  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-2 text-zinc-300">
        Send the details — I’ll reply with next steps.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6"
        >
          {/* Honeypot */}
          <input
            name="company"
            value={form.company}
            onChange={onChange}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <label className="block text-sm text-zinc-300">
            Name <span className="text-zinc-500">(required)</span>
          </label>
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            required
            className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm outline-none focus:border-zinc-600"
            placeholder="Your name"
          />

          <label className="mt-5 block text-sm text-zinc-300">
            Email <span className="text-zinc-500">(required)</span>
          </label>
          <input
            name="email"
            value={form.email}
            onChange={onChange}
            required
            type="email"
            className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm outline-none focus:border-zinc-600"
            placeholder="you@company.com"
          />

          <label className="mt-5 block text-sm text-zinc-300">
            Message <span className="text-zinc-500">(required)</span>
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            required
            rows={6}
            className="mt-2 w-full resize-none rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm outline-none focus:border-zinc-600"
            placeholder="What business are you? What do you need the website to do? Any deadline?"
          />

          <button
            disabled={status === "loading"}
            className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-200 disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="mt-4 text-sm text-zinc-200">
              ✅ Sent — I’ll get back to you soon.
            </p>
          )}

          {status === "error" && (
            <p className="mt-4 text-sm text-red-300">
              ❌ {error || "Failed to send."}
            </p>
          )}
        </form>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6">
          <h2 className="text-lg font-semibold">What to include</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            {[
              "Business type + location",
              "Services you offer",
              "Examples of sites you like",
              "Deadline (if any)",
              "Do you have a domain/logo/photos?",
            ].map((i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
                {i}
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
            <p className="text-xs text-zinc-400">Typical reply time</p>
            <p className="mt-1 text-sm text-zinc-200">
              Same day or within 24 hours
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
