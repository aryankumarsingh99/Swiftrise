"use client";

import { FormEvent, useState } from "react";

type ContactFormSectionProps = {
  status?: string;
};

const formEndpoint = "https://formsubmit.co/contactswiftrise@gmail.com";

export default function ContactFormSection({ status }: ContactFormSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(
    status === "sent"
      ? {
          type: "success",
          text: "Message sent successfully. We will contact you soon. Your request has been forwarded to contactswiftrise@gmail.com.",
        }
      : status === "error"
        ? {
            type: "error",
            text: "We could not send your message right now. Please try again in a moment or email contactswiftrise@gmail.com directly.",
          }
        : null,
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("_subject", "SwiftRise Technology Consultation Request");
    formData.append("_captcha", "false");
    formData.append("_template", "table");

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      form.reset();
      setSubmitMessage({
        type: "success",
        text: "Message sent successfully. We will contact you soon. Your request has been forwarded to contactswiftrise@gmail.com, and you can expect an initial response within 24 hours.",
      });
    } catch {
      setSubmitMessage({
        type: "error",
        text: "We could not send your message right now. Please try again in a moment. If the issue continues, email us directly at contactswiftrise@gmail.com with your project brief.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact-form" className="animate-rise relative overflow-hidden bg-white px-0 py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-[#163b60]/9 blur-[105px]" />
        <div className="absolute -right-24 bottom-4 h-80 w-80 rounded-full bg-[#e2c99d]/24 blur-[115px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#163b60]/20 to-transparent" />
      </div>

      <div className="relative mx-auto w-[92vw] max-w-7xl rounded-[1.8rem] p-4  backdrop-blur-sm sm:p-6 md:p-8">
        <div className="grid gap-8 md:grid-cols-[0.88fr_1.12fr]">
          <aside className="rounded-[1.35rem] border-4 border-[#113f67] p-6 md:p-7">
            <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#4a637d]">Technology Partner</p>
            <h2 className="max-w-[16ch] font-(--font-playfair-display) text-3xl leading-tight text-[#132c46] md:text-[2.65rem]">
              Connect With Our Technology Team
            </h2>
            <p className="mt-4 leading-7 text-[#4d657d]">
              Tell us what you are building or modernizing. We will respond with a technical plan covering architecture, timelines, and the right delivery model for your goals.
            </p>

            <div className="mt-7 grid gap-3">
              <div className="rounded-xl border border-[#163b60]/13 bg-white/65 px-4 py-3 text-sm text-[#2b4862]">
                Product discovery and technical scoping
              </div>
              <div className="rounded-xl border border-[#163b60]/13 bg-white/65 px-4 py-3 text-sm text-[#2b4862]">
                Solution architecture and cloud planning
              </div>
              <div className="rounded-xl border border-[#163b60]/13 bg-white/65 px-4 py-3 text-sm text-[#2b4862]">
                Agile delivery and post-launch support
              </div>
            </div>

            <div className="mt-7 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-lg border border-[#163b60]/13 bg-white/70 px-2 py-3">
                <p className="text-[10px] tracking-[0.14em] text-[#4f6780]">INITIAL</p>
                <p className="mt-1 text-sm font-semibold text-[#1a3652]">24h</p>
              </div>
              <div className="rounded-lg border border-[#163b60]/13 bg-white/70 px-2 py-3">
                <p className="text-[10px] tracking-[0.14em] text-[#4f6780]">PROPOSAL</p>
                <p className="mt-1 text-sm font-semibold text-[#1a3652]">72h</p>
              </div>
              <div className="rounded-lg border border-[#163b60]/13 bg-white/70 px-2 py-3">
                <p className="text-[10px] tracking-[0.14em] text-[#4f6780]">START</p>
                <p className="mt-1 text-sm font-semibold text-[#1a3652]">1 Week</p>
              </div>
            </div>
          </aside>

          <form
            onSubmit={handleSubmit}
            className="grid gap-4 rounded-[1.35rem] border-4 border-[#163b60] p-6 shadow-[0_20px_42px_rgba(22,43,62,0.12)] md:p-7"
          >
            <div className="mb-2 flex flex-wrap items-center justify-between gap-3 border-b border-[#163b60]/10 pb-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4b657d]">Technology Inquiry</p>
              <span className="rounded-full border border-[#163b60]/18 bg-[#113f67] px-3 py-1 text-[11px] font-medium text-[#ffffff]">
                Engineering response in 24 hours
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-[#496179]">
                Full Name
                <input
                  className="rounded-xl border border-[#163b60]/15 bg-white px-3 py-3 text-[#183652] outline-2 outline-transparent transition placeholder:text-[#8ca0b3] focus:border-[#163b60]/34 focus:outline-[#163b60]/20"
                  type="text"
                  name="name"
                  required
                  placeholder="Your full name"
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold text-[#496179]">
                Email
                <input
                  className="rounded-xl border border-[#163b60]/15 bg-white px-3 py-3 text-[#183652] outline-2 outline-transparent transition placeholder:text-[#8ca0b3] focus:border-[#163b60]/34 focus:outline-[#163b60]/20"
                  type="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-semibold text-[#496179]">
              Company
              <input
                className="rounded-xl border border-[#163b60]/15 bg-white px-3 py-3 text-[#183652] outline-2 outline-transparent transition placeholder:text-[#8ca0b3] focus:border-[#163b60]/34 focus:outline-[#163b60]/20"
                type="text"
                name="company"
                placeholder="Your company or organization"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-[#496179]">
              Project brief
              <textarea
                className="rounded-xl border border-[#163b60]/15 bg-white px-3 py-3 text-[#183652] outline-2 outline-transparent transition placeholder:text-[#8ca0b3] focus:border-[#163b60]/34 focus:outline-[#163b60]/20"
                name="message"
                rows={6}
                required
                placeholder="Share your product idea, technical challenges, expected timeline, preferred tech stack, and business goals."
              />
            </label>

            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

            {submitMessage ? (
              <p
                className={`rounded-xl border px-4 py-3 text-sm font-medium ${
                  submitMessage.type === "success"
                    ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                    : "border-rose-200 bg-rose-50 text-rose-700"
                }`}
              >
                {submitMessage.text}
              </p>
            ) : null}

            <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs tracking-[0.12em] text-[#5e778e]">By submitting this form, you agree to be contacted by our engineering and consulting team.</p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#163b60] to-[#12395c] px-6 py-3 text-[0.95rem] font-semibold tracking-[0.12em] text-[#f8ecd6] transition hover:-translate-y-px hover:from-[#1b4f7a] hover:to-[#15466f]"
              >
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
