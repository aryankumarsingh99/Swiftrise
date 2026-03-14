"use client";

export default function NewsletterForm() {
  return (
    <div>
      <form
        className="flex flex-col gap-3 sm:flex-row"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          required
          placeholder="your@company.com"
          className="flex-1 rounded-full border border-gray-300 bg-white/10 px-4 py-3 text-sm text-black placeholder:text-gray-400 outline-none transition focus:border-white/60"
        />
        <button
          type="submit"
          className="shrink-0 rounded-full text-white bg-[#0d1b36] px-5 py-3 text-sm font-semibold text-[--ink] transition hover:-translate-y-px hover:bg-[--surface-soft]"
        >
          Subscribe
        </button>
      </form>
      <p className="mt-2 text-xs text-gray-400">Unsubscribe anytime. No spam, ever.</p>
    </div>
  );
}
