export default function SmartLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#0f1724] px-4">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-[20%] h-80 w-80 rounded-full bg-[#56c4d6]/15 blur-[110px]" />
        <div className="absolute right-[-160px] bottom-[8%] h-96 w-96 rounded-full bg-[#d2a86d]/16 blur-[120px]" />
        <svg className="absolute inset-0 h-full w-full opacity-20" width="100%" height="100%">
          <defs>
            <pattern id="nightGrid" width="42" height="42" patternUnits="userSpaceOnUse">
              <path d="M42 0H0V42" fill="none" stroke="#7aa4ba" strokeOpacity="0.14" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#nightGrid)" />
        </svg>
      </div>

      <div className="relative w-full max-w-2xl overflow-hidden rounded-4xl border border-[#8aa7b9]/20 bg-[#111d2d]/78 p-7 shadow-[0_30px_80px_rgba(4,10,18,0.5)] backdrop-blur-xl sm:p-10">
        <div className="absolute inset-x-8 top-0 h-0.75 bg-linear-to-r from-transparent via-[#7eb3c4]/45 to-transparent" />

        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[#8fb3c6]">SWIFTRISE SYSTEM</p>
            <h2 className="mt-2 font-serif text-3xl text-[#f5ecdc] sm:text-4xl">Loading Workspace</h2>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full border border-[#7fc5d7]/35 bg-[#1a2d40]/70 px-3 py-1 text-[10px] tracking-widest text-[#9ec3d5]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#72d8e7]" />
            LIVE
          </span>
        </div>

        <div className="mt-8 flex items-center gap-6">
          <div className="relative h-24 w-24 shrink-0">
            <svg className="absolute inset-0 h-full w-full animate-loader-spin" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="loaderCore" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6fd2e4" />
                  <stop offset="100%" stopColor="#d2a86d" />
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="40" stroke="#6d8798" strokeOpacity="0.24" strokeWidth="5" fill="none" />
              <circle cx="50" cy="50" r="40" stroke="url(#loaderCore)" strokeWidth="6" fill="none" strokeDasharray="110 250" strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-10 w-10 rounded-full bg-[#72d8e7]/90 animate-loader-core" />
            </div>
            <div className="absolute inset-0 animate-loader-orbit">
              <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#d2a86d]" />
            </div>
          </div>

          <div className="flex-1 space-y-3">
            <div className="rounded-xl border border-[#8fb3c6]/20 bg-[#16273a]/70 px-4 py-3 text-sm text-[#c8d9e4]">
              Calibrating interface modules
            </div>
            <div className="rounded-xl border border-[#8fb3c6]/20 bg-[#16273a]/70 px-4 py-3 text-sm text-[#c8d9e4]">
              Establishing secure data channels
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="mb-2 flex items-center justify-between text-xs tracking-[0.16em] text-[#93b6c8]">
            <span>PROGRESS</span>
            <span>SYNCING RESOURCES</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full border border-[#7aa4ba]/25 bg-[#1a2a3d]">
            <div className="h-full w-full animate-loader-track bg-linear-to-r from-[#72d8e7] via-[#d2a86d] to-[#72d8e7]" />
          </div>
        </div>

        <style jsx>{`
          @keyframes loader-spin {
            100% {
              transform: rotate(360deg);
            }
          }

          .animate-loader-spin {
            animation: loader-spin 2.1s linear infinite;
          }

          @keyframes loader-orbit {
            100% {
              transform: rotate(360deg);
            }
          }

          .animate-loader-orbit {
            animation: loader-orbit 3.2s linear infinite;
          }

          @keyframes loader-core {
            0%,
            100% {
              transform: scale(0.82);
              opacity: 0.8;
            }
            50% {
              transform: scale(1);
              opacity: 1;
            }
          }

          .animate-loader-core {
            animation: loader-core 1.6s ease-in-out infinite;
          }

          @keyframes loader-track {
            0% {
              transform: translateX(-30%);
            }
            100% {
              transform: translateX(30%);
            }
          }

          .animate-loader-track {
            animation: loader-track 1.4s ease-in-out infinite alternate;
          }
        `}</style>
      </div>
    </div>
  );
}
