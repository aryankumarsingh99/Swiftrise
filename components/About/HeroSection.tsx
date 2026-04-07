import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="animate-rise relative isolate min-h-[120vh] overflow-hidden text-white">
      <Image
        src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Leadership team in strategic meeting"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,32,84,0.38)_0%,rgba(4,27,82,0.72)_58%,rgba(2,21,70,0.88)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.14)_0%,transparent_35%),radial-gradient(circle_at_88%_68%,rgba(88,131,255,0.15)_0%,transparent_33%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.22)_0.65px,transparent_0.65px)] bg-size-[18px_18px] opacity-30" />

      <div className="relative mx-auto flex min-h-[92vh] w-[94vw] max-w-330 flex-col px-2 pb-10 pt-40 sm:px-4 md:pb-14 md:pt-52">
        <div className="mt-auto">
          <p className="mb-3 text-[1.9rem] tracking-tight text-white/90">ABOUT SWIFTRISE</p>
          <h1 className="max-w-[18ch] text-4xl font-medium leading-[1.06] sm:text-5xl md:text-6xl lg:text-7xl">
            Engineering Intelligence &amp;  Enabling Transformation
          </h1>

          <div className="mt-8 border-t border-white/35 pt-5 md:mt-12 md:pt-7">
            <div className="grid gap-8 text-[1.08rem] leading-relaxed text-white/90 md:grid-cols-2 md:items-start md:gap-10">
              <div className="mb-4">
                <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
                <p>
                  Swiftrise Solution Pvt. Ltd. is a forward-looking technology company focused on building intelligent, scalable, and high-performance digital solutions. We specialize in combining advanced engineering with AI-driven innovation to create systems that are adaptive, efficient, and future-ready.<br/>
                  Our approach is rooted in precision, performance, and continuous innovation—enabling businesses to transform digitally and operate with greater agility in an evolving technological landscape.
                </p>
              </div>
              <div className="mb-4">
                <h2 className="text-2xl font-semibold mb-2">What We Do</h2>
                <p>
                  We design, develop, and deploy cutting-edge digital platforms that solve complex business challenges. From AI-powered systems and scalable web applications to cloud-native infrastructures, our solutions are engineered to deliver measurable impact and long-term value.
                </p>
                  
              </div>
            </div>
            <div className="mt-8 text-lg text-white/90 font-medium text-center md:text-left">
              At Swiftrise, we don’t just build technology—we engineer intelligent ecosystems that drive transformation, efficiency, and growth.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}