import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

function buildRedirectUrl(request: Request, ok: boolean) {
  const referer = request.headers.get("referer");
  if (!referer) {
    return new URL(`/contact?status=${ok ? "sent" : "error"}#contact-form`, request.url);
  }

  const redirectUrl = new URL(referer);
  redirectUrl.searchParams.set("status", ok ? "sent" : "error");
  redirectUrl.hash = "contact-form";
  return redirectUrl;
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const company = String(formData.get("company") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !message) {
    return NextResponse.redirect(buildRedirectUrl(request, false));
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = Number(process.env.SMTP_PORT || 465);

  if (!smtpUser || !smtpPass) {
    return NextResponse.redirect(buildRedirectUrl(request, false));
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const safeCompany = company || "Not provided";
  const subject = `New Contact Request from ${name}`;
  const textBody = [
    "New website contact request",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${safeCompany}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    await transporter.sendMail({
      from: `SwiftRise Contact <${smtpUser}>`,
      to: "contactswiftrise@gmail.com",
      replyTo: email,
      subject,
      text: textBody,
      html: `
        <h2>New website contact request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${safeCompany}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.redirect(buildRedirectUrl(request, true));
  } catch {
    return NextResponse.redirect(buildRedirectUrl(request, false));
  }
}