import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, message, company } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Simple anti-spam honeypot (optional field in the form)
    // If bots fill it, we silently succeed but do nothing.
    if (company && typeof company === "string" && company.trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const ownerEmail = process.env.CONTACT_TO_EMAIL; // your inbox
    if (!ownerEmail) {
      return NextResponse.json(
        { ok: false, error: "Server not configured." },
        { status: 500 }
      );
    }

    // IMPORTANT:
    // Many email providers require "from" to be a verified domain address.
    // We'll use your verified sender as "from" and set reply-to as the user's email.
    const from = process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

    const subject = `New portfolio inquiry from ${name}`;

    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const result = await resend.emails.send({
      from,
      to: ownerEmail,
      replyTo: email,
      subject,
      text,
    });

    return NextResponse.json({ ok: true, id: result.data?.id });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Failed to send message." },
      { status: 500 }
    );
  }
}
