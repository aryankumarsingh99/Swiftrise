
export default function SmartLoader() {
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#e0e7ef]">
			<div className="relative flex flex-col items-center justify-center w-[340px] max-w-[90vw] rounded-3xl bg-white/60 shadow-2xl backdrop-blur-xl border border-white/40 p-10">
				{/* Animated gradient ring */}
				<div className="relative mb-8">
					<div className="w-28 h-28 rounded-full bg-gradient-to-tr from-blue-400 via-blue-200 to-blue-600 opacity-30 absolute top-0 left-0 blur-2xl animate-pulse-slow" />
					<svg className="w-24 h-24 animate-spin-gradient" viewBox="0 0 100 100">
						<defs>
							<linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
								<stop offset="0%" stopColor="#3b82f6" />
								<stop offset="100%" stopColor="#6366f1" />
							</linearGradient>
						</defs>
						<circle cx="50" cy="50" r="40" stroke="url(#grad1)" strokeWidth="8" fill="none" strokeDasharray="180 80" strokeLinecap="round" />
					</svg>
					<div className="absolute inset-0 flex items-center justify-center">
						<span className="text-3xl font-black text-blue-700 tracking-tight drop-shadow-sm select-none">S</span>
					</div>
				</div>
				{/* Modern text */}
				<span className="text-xl font-semibold text-blue-900 tracking-wide mb-1 animate-fade-in-up">SwiftRise</span>
				<span className="text-base text-blue-500 font-medium animate-fade-in-up delay-200">Loading your experience...</span>
				{/* Minimal loader bar */}
				<div className="mt-8 w-40 h-2 bg-blue-100 rounded-full overflow-hidden">
					<div className="h-full bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 animate-loader-bar rounded-full" />
				</div>
				{/* Animations */}
				<style jsx>{`
					@keyframes spin-gradient { 100% { transform: rotate(360deg); } }
					.animate-spin-gradient { animation: spin-gradient 1.8s linear infinite; }
					@keyframes fade-in-up { 0% { opacity: 0; transform: translateY(16px); } 100% { opacity: 1; transform: translateY(0); } }
					.animate-fade-in-up { animation: fade-in-up 0.7s cubic-bezier(.4,0,.2,1) both; }
					@keyframes loader-bar { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
					.animate-loader-bar { animation: loader-bar 1.4s cubic-bezier(.4,0,.2,1) infinite; }
					@keyframes pulse-slow { 0%, 100% { opacity: 0.7; } 50% { opacity: 1; } }
					.animate-pulse-slow { animation: pulse-slow 2.2s cubic-bezier(.4,0,.6,1) infinite; }
				`}</style>
			</div>
		</div>
	);
}
