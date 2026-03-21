import NewsletterForm from "@/components/NewsletterForm";

export default function NewsletterSection() {
  return (
    <section className="animate-rise px-0 py-20 md:py-28 relative">
      <div className="absolute inset-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-15 pointer-events-none" />
      <div className="mx-auto w-[92vw] max-w-7xl relative z-10">
        <div className="overflow-hidden rounded-2xl bg-white/90 px-8 py-14 md:px-16 shadow-lg flex flex-col md:flex-row gap-10 items-center group">
          <div className="flex-1 animate-fadeInLeft duration-700 [animation-delay:200ms]">
            <p className="mb-3 text-[0.72rem] uppercase tracking-[0.16em] text-[--accent] font-bold animate-fadeInUp [animation-delay:300ms]">Insights Newsletter</p>
            <h2 className="font-(--font-playfair-display) text-3xl md:text-4xl font-extrabold text-[#232d4b] mb-4 animate-fadeInUp [animation-delay:400ms]">Strategy & Delivery, Straight To Your Inbox</h2>
            <p className="mt-3 text-lg text-[--ink-soft] animate-fadeInUp [animation-delay:500ms]">Get one actionable brief per month. No noise — just field-tested perspectives on infrastructure, operations, and growth.</p>
            <div className="mt-8 flex items-center gap-4 bg-white/80 rounded-xl p-4 shadow animate-fadeInUp [animation-delay:600ms] transition-transform duration-500 group-hover:scale-105 group-hover:shadow-xl">
              <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Subscriber" className="w-12 h-12 rounded-full border-2 border-[--accent] shadow animate-fadeInUp [animation-delay:700ms] transition-transform duration-500 group-hover:scale-110" />
              <div>
                <p className="text-[--accent] italic animate-fadeInUp [animation-delay:800ms]">“The newsletter keeps me ahead of industry trends. Highly recommended!”</p>
                <span className="block mt-1 text-xs text-[--ink-soft] animate-fadeInUp [animation-delay:900ms]">— S. Kumar, Operations Lead</span>
              </div>
            </div>
          </div>
          <div className="flex-1 animate-fadeInRight duration-700 [animation-delay:300ms]">
            <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center animate-fadeInUp [animation-delay:1000ms] transition-transform duration-500 group-hover:scale-105 group-hover:shadow-xl">
              <NewsletterForm />
              <p className="mt-4 text-xs text-[--ink-soft] text-center animate-fadeInUp [animation-delay:1100ms]">We respect your privacy. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
