"use client";

export default function NewsletterForm() {
  return (
    <form
      className="flex flex-col gap-3 sm:flex-row"
      onSubmit={e => e.preventDefault()}
    >
      <input
        type="email"
        required
        placeholder="your@company.com"
        className="flex-1 rounded-full border border-gray-300 bg-white/10 px-4 py-3 text-sm text-black placeholder:text-gray-400 outline-none transition focus:border-blue-400"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-[#172546] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-px hover:bg-[#1d4ed8]"
      >
        Subscribe
      </button>
    </form>
  );
}
