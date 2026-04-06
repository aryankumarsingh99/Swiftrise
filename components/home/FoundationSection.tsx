'use client';

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type FoundationTone = "dark" | "light";

const containerVariants: Variants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.06,
		},
	},
};

const revealVariants: Variants = {
	hidden: { opacity: 0, y: 22 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
	},
};

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 22 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
	},
	hover: {
		y: -7,
		transition: { duration: 0.2, ease: "easeOut" },
	},
};

const HIGHLIGHT_CLASSES = {
	default: {
		card: "border-[#173a5a]/10 bg-white",
		label: "text-[#637a93]",
		title: "text-[#12395c]",
		desc: "text-[#41566f]",
	},
	accent: {
		card: "border-[#d7c39b]/35 bg-[#102a45] text-[#f6efe3]",
		label: "text-[#d8c39c]",
		title: "text-[#fff7ea]",
		desc: "text-[#e9dcc6]",
	},
} as const;

const FOUNDATION_TONE_CLASSES: Record<
	FoundationTone,
	{
		card: string;
		corner: string;
		stamp: string;
		kicker: string;
		title: string;
		desc: string;
	}
> = {
	dark: {
		card: "border-white/12 bg-[linear-gradient(180deg,#0d2742_0%,#091c31_100%)] text-[#f4efe6]",
		corner: "bg-[#ffffff]",
		stamp: "border-[#f3cb6f] bg-[#0b2139] text-[#e7d7b3]",
		kicker: "text-[#d8c39c]",
		title: "text-[#f9f6f1]",
		desc: "text-[#e6edf5]",
	},
	light: {
		card: "border-[#12395c]/12 bg-[#ffffff] text-[#12395c]",
		corner: "bg-[#12395c]",
		stamp: "border-[#12395c]/20 bg-white text-[#12395c]",
		kicker: "text-[#5d7692]",
		title: "text-[#0f243d]",
		desc: "text-[#31465f]",
	},
};

const impactHighlights = [
	{
		label: "Clarity",
		title: "Simple guidance",
		desc: "Straightforward advice for complex decisions.",
	},
	{
		label: "Resilience",
		title: "Built to last",
		desc: "Structures and safeguards that hold under pressure.",
	},
	{
		label: "Confidence",
		title: "Measured outcomes",
		desc: "Execution that translates plans into real progress.",
	},
];

const foundationCards = [
	{
		kicker: "Vision",
		title: "Secure futures through dependable systems",
		desc: "We aim to build a future where people and businesses operate with assurance, backed by adaptable protection frameworks that strengthen stability and reduce long-term vulnerability.",
		stamp: "V",
		tone: "dark",
	},
	{
		kicker: "Mission",
		title: "Simplify complexity with measurable value",
		desc: "Our mission is to deliver integrated insurance and financial solutions that improve clarity, reduce risk, and create sustained value through transparent and reliable service.",
		stamp: "M",
		tone: "light",
	},
] as const;

export default function FoundationSection() {
	const sectionRef = useRef(null);
	const [showContent, setShowContent] = useState(false);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		const element = sectionRef.current;
		if (!element) return;

		const observer = new window.IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					if (timeoutRef.current) clearTimeout(timeoutRef.current);
					setShowContent(true);
				} else {
					timeoutRef.current = setTimeout(() => setShowContent(false), 400);
				}
			},
			{ threshold: 0.25 }
		);

		observer.observe(element);

		return () => {
			observer.disconnect();
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, []);

	return (
		<section
			ref={sectionRef}
			className="relative w-full overflow-hidden bg-[#081220] py-20 md:py-28"
		>
			<style>{`
				.slide-in-left {
					opacity: 0;
					transform: translateX(-56px);
					transition: opacity 0.9s cubic-bezier(.4,0,.2,1), transform 0.9s cubic-bezier(.4,0,.2,1);
				}
				.slide-in-right {
					opacity: 0;
					transform: translateX(56px);
					transition: opacity 0.9s cubic-bezier(.4,0,.2,1), transform 0.9s cubic-bezier(.4,0,.2,1);
				}
				.slide-up {
					opacity: 0;
					transform: translateY(56px);
					transition: opacity 0.95s cubic-bezier(.4,0,.2,1), transform 0.95s cubic-bezier(.4,0,.2,1);
				}
				.slide-down {
					opacity: 0;
					transform: translateY(-56px);
					transition: opacity 0.95s cubic-bezier(.4,0,.2,1), transform 0.95s cubic-bezier(.4,0,.2,1);
				}
				.slide-active {
					opacity: 1 !important;
					transform: translate(0, 0) !important;
				}
			`}</style>
			<div className="pointer-events-none absolute inset-x-0 top-0 h-2/5 bg-white" />
			<div className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-[#113f67]" />
			<motion.div
				className={`pointer-events-none absolute right-8 top-20 z-20 hidden rounded-2xl border border-white/45 bg-white/35 px-5 py-4 text-[#12395c] shadow-[0_18px_38px_rgba(8,18,32,0.2)] backdrop-blur-md md:block slide-down${showContent ? ' slide-active' : ''}`}
			>
				<p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#5e7490]">Stability</p>
				<p className="mt-2 font-serif text-xl">Measured growth</p>
			</motion.div>
			<motion.div
				className={`pointer-events-none absolute bottom-24 left-8 z-20 hidden rounded-2xl border border-white/28 bg-[#0f2d4a]/72 px-5 py-4 text-[#edf2f7] shadow-[0_18px_38px_rgba(2,8,17,0.34)] backdrop-blur-md md:block slide-up${showContent ? ' slide-active' : ''}`}
			>
				<p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d8c39c]">Confidence</p>
				<p className="mt-2 font-serif text-xl text-[#fff8ea]">Future-ready</p>
			</motion.div>

			<motion.div
				className={`relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 slide-up${showContent ? ' slide-active' : ''}`}
				variants={containerVariants}
				initial="show"
				animate="show"
			>
				<div className="grid gap-8 xl:grid-cols-[1.04fr_0.96fr] xl:items-end">
					<motion.div
						className={`relative overflow-hidden rounded-[2.4rem] border-4 border-[#1d3a57] bg-white p-7 shadow-[0_26px_64px_rgba(5,14,24,0.15)] sm:p-9 lg:p-10 slide-in-left${showContent ? ' slide-active' : ''}`}
						variants={revealVariants}
					>
						<div className="absolute right-0 top-0 h-40 w-40 rounded-bl-[2.6rem] bg-[radial-gradient(circle,rgba(18,57,92,0.08),transparent_70%)]" />
						<div className="absolute -bottom-12 -right-10 h-56 w-56 rounded-full bg-[#c9a66b]/12 blur-3xl" />

						<p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#576d85] sm:text-sm">
							Our Foundation
						</p>
						<h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-[#0f243d] sm:text-5xl md:text-6xl">
							Precision-driven solutions for a secure tomorrow.
						</h2>
						<p className="mt-6 max-w-2xl text-[15px] leading-8 text-[#31445b] md:text-base">
							We design integrated protection and financial pathways that reduce uncertainty, improve resilience, and create dependable progress for individuals, families, and modern businesses.
						</p>

						<div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#1d3a57]/15 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#445d78] backdrop-blur-sm sm:text-xs">
							<span className="h-2 w-2 rounded-full bg-[#c9a66b]" />
							Engineered for Stability
						</div>

						<div className="mt-10 grid gap-4 sm:grid-cols-3">
							{impactHighlights.map((item, index) => {
								const style = index === 2 ? HIGHLIGHT_CLASSES.accent : HIGHLIGHT_CLASSES.default;

								return (
								<div
									key={item.label}
									className={`rounded-3xl border p-4 shadow-[0_12px_26px_rgba(13,35,59,0.08)] ${style.card}`}
								>
									<div className={`text-[11px] uppercase tracking-[0.24em] ${style.label}`}>
										{item.label}
									</div>
									<div className={`mt-2 font-serif text-lg ${style.title}`}>
										{item.title}
									</div>
									<p className={`mt-2 text-sm leading-6 ${style.desc}`}>
										{item.desc}
									</p>
								</div>
								);
							})}
						</div>
					</motion.div>

					<div className={`grid gap-9 slide-in-right${showContent ? ' slide-active' : ''}`}>
						{foundationCards.map((item) => {
							const tone = FOUNDATION_TONE_CLASSES[item.tone];

							return (
							<motion.div
								key={item.kicker}
								className={`group relative overflow-hidden rounded-4xl border p-7 shadow-[0_22px_48px_rgba(2,8,17,0.18)] sm:p-8 ${tone.card}`}
								variants={cardVariants}
								whileHover="hover"
							>
								<div className={`absolute right-0 top-0 h-28 w-28 rounded-bl-4xl ${tone.corner}`} />
								<div className={`relative mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold tracking-[0.2em] ${tone.stamp}`}>
									{item.stamp}
								</div>
								<p className={`text-[11px] uppercase tracking-[0.22em] ${tone.kicker}`}>
									{item.kicker}
								</p>
								<h3 className={`mt-3 max-w-xl font-serif text-2xl leading-tight sm:text-3xl ${tone.title}`}>
									{item.title}
								</h3>
								<p className={`mt-4 text-sm leading-7 sm:text-base ${tone.desc}`}>
									{item.desc}
								</p>
							</motion.div>
							);
						})}
					</div>
				</div>



				<div className="mt-12 grid gap-8 md:grid-cols-2">
					<motion.div className="space-y-5" variants={revealVariants}>
						<p className="text-[15px] leading-8 text-[#e8edf4] md:text-base">
							We create integrated protection solutions that enhance stability, reduce uncertainty, and support long-term confidence for individuals, families, and modern businesses.
						</p>
						<p className="text-[15px] leading-8 text-[#e8edf4] md:text-base">
							Our approach delivers clarity and measurable value by simplifying complexity, strengthening resilience, and providing future-ready strategies that empower clients’ progress.
						</p>
					</motion.div>
					<motion.div className="grid gap-3 sm:grid-cols-3" variants={revealVariants}>
						<div className="rounded-2xl border border-white/14 bg-white/10 p-4 backdrop-blur-sm">
							<p className="text-[11px] uppercase tracking-[0.2em] text-[#c7d4e2]">Focus</p>
							<p className="mt-2 font-serif text-lg text-white">Clear direction</p>
						</div>
						<div className="rounded-2xl border border-white/14 bg-white/10 p-4 backdrop-blur-sm">
							<p className="text-[11px] uppercase tracking-[0.2em] text-[#c7d4e2]">Balance</p>
							<p className="mt-2 font-serif text-lg text-white">Calm delivery</p>
						</div>
						<div className="rounded-2xl border border-[#d8c39c]/35 bg-[#102a45] p-4">
							<p className="text-[11px] uppercase tracking-[0.2em] text-[#d8c39c]">Trust</p>
							<p className="mt-2 font-serif text-lg text-[#fff7ea]">Reliable outcomes</p>
						</div>
					</motion.div>
				</div>

				<motion.div className="mb-4 mt-14 text-xs font-semibold uppercase tracking-[0.34em] text-[#d8c39c] sm:text-sm" variants={revealVariants}>
					Our Impact
				</motion.div>

				<motion.div
					className={`overflow-hidden rounded-[2.4rem] border border-white/10 bg-[#081523] shadow-[0_28px_60px_rgba(2,8,17,0.34)] slide-up${showContent ? ' slide-active' : ''}`}
					variants={revealVariants}
				>
					<div className="grid lg:grid-cols-[1.05fr_0.95fr]">
						<div className="relative min-h-96 lg:min-h-136">
							<Image
								src="https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt="Team impact"
								fill
								className="object-cover"
								priority
							/>
  
							<div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md sm:left-7 sm:top-7 sm:text-xs">
								<span className="h-2 w-2 rounded-full bg-[#d8c39c]" />
								Impact in Action
							</div>

							<div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
								<div className="max-w-xl rounded-3xl border border-white/12 bg-[#081624]/70 p-5 text-white backdrop-blur-md sm:p-6">
									<p className="mb-4 text-[13px] uppercase tracking-[0.26em] text-[#d8c39c] sm:text-sm">
										Consistent delivery, measurable value
									</p>
									<p className="max-w-lg text-sm leading-7 text-[#edf2f7] sm:text-base">
										We combine disciplined oversight with calm execution, giving every project a dependable path from planning to completion.
									</p>
								</div>
							</div>
						</div>

						<div className="flex flex-col justify-between gap-8 bg-white p-6 sm:p-8 lg:p-10">
							<div>
								<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#12395c]/12 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4a627d] sm:text-xs">
									<span className="h-1.5 w-1.5 rounded-full bg-[#12395c]" />
									Project Delivery That Holds
								</div>

								<h3 className="max-w-lg font-serif text-3xl font-semibold tracking-wide text-[#0f243d] sm:text-4xl">
									Results shaped by precision, oversight, and trust.
								</h3>

								<div className="mt-6 grid gap-5 text-sm leading-7 text-[#2e4158] sm:text-base">
									<p>
										We deliver consistent project outcomes through structured processes and attentive oversight, ensuring developments progress smoothly and meet every expectation with reliable, measurable results.
									</p>
									<p>
										Our approach reduces risk, improves efficiency, and strengthens client confidence, creating long-term value across every stage of the built environment lifecycle.
									</p>
								</div>
							</div>

							<div className="grid gap-3 border-t border-[#173a5a]/10 pt-5 sm:grid-cols-3">
								<div className="rounded-2xl border border-[#173a5a]/10 bg-white/80 px-4 py-4 shadow-[0_10px_24px_rgba(13,35,59,0.06)]">
									<div className="text-[11px] uppercase tracking-[0.2em] text-[#68809a]">Oversight</div>
									<div className="mt-2 text-base font-semibold text-[#12395c]">Hands-on coordination</div>
								</div>
								<div className="rounded-2xl border border-[#173a5a]/10 bg-white/80 px-4 py-4 shadow-[0_10px_24px_rgba(13,35,59,0.06)]">
									<div className="text-[11px] uppercase tracking-[0.2em] text-[#68809a]">Delivery</div>
									<div className="mt-2 text-base font-semibold text-[#12395c]">Smooth execution</div>
								</div>
								<div className="rounded-2xl border border-[#12395c]/10 bg-[#12395c] px-4 py-4 text-[#f5efe4] shadow-[0_10px_24px_rgba(13,35,59,0.1)]">
									<div className="text-[11px] uppercase tracking-[0.2em] text-[#d8c39c]">Outcome</div>
									<div className="mt-2 text-base font-semibold text-[#fff7ea]">Long-term value</div>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</motion.div>

			<motion.div className={`pointer-events-none absolute inset-0 z-0 slide-up${showContent ? ' slide-active' : ''}`}>
				<div
					style={{
						position: "absolute",
						right: "-120px",
						top: "8%",
						width: "380px",
						height: "380px",
						background: "#c9a66b",
						borderRadius: "50%",
						filter: "blur(120px)",
						opacity: 0.26,
						zIndex: 1,
					}}
				/>
				<div
					style={{
						position: "absolute",
						left: "-150px",
						bottom: "2%",
						width: "380px",
						height: "380px",
						background: "#12395c",
						borderRadius: "50%",
						filter: "blur(120px)",
						opacity: 0.24,
						zIndex: 1,
					}}
				/>
				<svg width="100%" height="100%" className="absolute left-0 top-0" style={{ opacity: 0.34, zIndex: 2 }}>
					<defs>
						<pattern id="foundationMesh" width="84" height="84" patternUnits="userSpaceOnUse">
							<path d="M0 42 H84 M42 0 V84" stroke="#12395c" strokeWidth="0.45" opacity="0.28" />
							<circle cx="42" cy="42" r="1.2" fill="#c9a66b" opacity="0.5" />
						</pattern>
						<pattern id="microGrid" width="24" height="24" patternUnits="userSpaceOnUse">
							<path d="M24 0 L0 0 0 24" fill="none" stroke="#12395c" strokeWidth="0.25" opacity="0.22" />
						</pattern>
						<radialGradient id="foundationGlow" cx="50%" cy="50%" r="50%">
							<stop offset="0%" stopColor="#c9a66b" stopOpacity="0.45" />
							<stop offset="100%" stopColor="#c9a66b" stopOpacity="0" />
						</radialGradient>
						<linearGradient id="orbitStroke" x1="0" y1="0" x2="1" y2="1">
							<stop offset="0%" stopColor="#12395c" stopOpacity="0.08" />
							<stop offset="45%" stopColor="#12395c" stopOpacity="0.44" />
							<stop offset="100%" stopColor="#c9a66b" stopOpacity="0.42" />
						</linearGradient>
					</defs>
					<rect width="100%" height="100%" fill="url(#foundationMesh)" opacity="0.46" />
					<rect width="100%" height="100%" fill="url(#microGrid)" opacity="0.28" />
					<ellipse cx="240" cy="200" rx="240" ry="95" fill="none" stroke="url(#orbitStroke)" strokeWidth="1.25" />
					<ellipse cx="620" cy="330" rx="320" ry="118" fill="none" stroke="url(#orbitStroke)" strokeWidth="1.25" />
					<ellipse cx="980" cy="530" rx="300" ry="105" fill="none" stroke="url(#orbitStroke)" strokeWidth="1.1" />
					<ellipse cx="620" cy="330" rx="360" ry="142" fill="none" stroke="#c9a66b" strokeDasharray="5 11" strokeWidth="1" opacity="0.48" />
					<ellipse cx="980" cy="530" rx="340" ry="126" fill="none" stroke="#12395c" strokeDasharray="4 10" strokeWidth="0.95" opacity="0.44" />
					<path d="M-120 260 C 180 160, 420 315, 760 245 C 980 200, 1160 230, 1380 300" fill="none" stroke="#12395c" strokeWidth="1.15" opacity="0.42" />
					<path d="M-90 460 C 180 350, 460 520, 820 445 C 1060 395, 1220 420, 1400 480" fill="none" stroke="#c9a66b" strokeWidth="1.2" opacity="0.56" />
					<path d="M120 120 L200 160 L170 245 L90 205 Z" fill="none" stroke="#12395c" strokeWidth="0.9" opacity="0.28" />
					<path d="M860 640 L960 604 L1020 676 L920 712 Z" fill="none" stroke="#c9a66b" strokeWidth="0.95" opacity="0.34" />
					<circle cx="240" cy="200" r="42" fill="url(#foundationGlow)" opacity="0.58" />
					<circle cx="620" cy="330" r="34" fill="url(#foundationGlow)" opacity="0.48" />
					<circle cx="980" cy="530" r="46" fill="url(#foundationGlow)" opacity="0.54" />
					<circle cx="300" cy="162" r="5" fill="#c9a66b" opacity="0.56" />
					<circle cx="700" cy="288" r="4" fill="#12395c" opacity="0.5" />
					<circle cx="1040" cy="496" r="5" fill="#c9a66b" opacity="0.52" />
					<circle cx="175" cy="238" r="2.6" fill="#12395c" opacity="0.44" />
					<circle cx="932" cy="682" r="2.8" fill="#c9a66b" opacity="0.48" />
				</svg>
			</motion.div>
		</section>
	);
}

