export default function MapSection() {
  const googleMapsUrl = "https://maps.app.goo.gl/dBkSp7Vbuyh2nC9M8?g_st=ic";

  return (
    <section className="bg-[#113f67] px-0 pb-18 pt-8 md:pb-24 md:pt-10">
      <div className="mx-auto w-[92vw] max-w-7xl overflow-hidden rounded-[1.6rem]  bg-[#ffffff] shadow-[0_24px_52px_rgba(24,44,62,0.12)]">
        <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
          <div className="border-b border-[#163b60]/14 p-6 md:border-b-0 md:border-r md:p-8 lg:p-10">
            <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#48627b]">Find Us</p>
            <h2 className="max-w-[16ch] font-(--font-playfair-display) text-3xl leading-tight text-[#132c46] md:text-4xl">
              Visit Our Technology Studio
            </h2>
            <p className="mt-4 max-w-[30ch] text-sm leading-7 text-[#4d657d] md:text-base">
              Meet our engineers and consultants to discuss your digital products, cloud initiatives, and automation roadmap in person.
            </p>

            <div className="mt-7 space-y-3 rounded-2xl border-4 border-[#163b60] bg-[#ffffff] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4f6780]">Office</p>
              <p className="text-sm leading-6 text-[#18334d]">
                Swiftrise Solution Pvt Ltd
                <br />
                Bhagabat Sandhan Colony, Rasulgarh, Bhubaneswar, Odisha - 751010
                <br />
                India
              </p>
            </div>
          </div>

          <div className="relative min-h-80 overflow-hidden md:min-h-105">
            <iframe
              title="SwiftRise office location map"
              src="https://www.google.com/maps?q=33/11,+Star+House,+Lane-4,+Bhagabat+Sandhan+Colony,+Rasulgarh,+Bhubaneswar,+Odisha+751010&output=embed"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 z-10 rounded-full bg-[#ffffff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#113f67] shadow-[0_10px_24px_rgba(10,30,48,0.24)]"
            >
              Open in Google Maps
            </a>
            <div className="pointer-events-none absolute inset-0 border-l border-white/35 md:hidden" />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#112f4d]/22 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
