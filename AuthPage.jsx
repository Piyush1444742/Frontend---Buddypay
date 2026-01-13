import { useState } from "react";
import { Link } from "react-router-dom";

export default function AuthPage() {
  const [mode] = useState("login"); // locked to login only

  return (
    <div className="min-h-screen bg-[#070B1E] text-white relative overflow-hidden">
      {/* Background blur shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-36 -top-36 h-96 w-96 rounded-full bg-purple-600/25 blur-3xl" />
        <div className="absolute right-20 top-10 h-72 w-72 rounded-full bg-blue-600/15 blur-3xl" />
        <div className="absolute right-[-140px] bottom-[-140px] h-[460px] w-[460px] rounded-full bg-blue-700/20 blur-3xl" />
      </div>

      {/* Top back bar */}
      <div className="relative z-10 bg-black/30 border-b border-white/10 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center gap-4">
          <Link to="/" className="text-white/80 hover:text-white text-2xl">
            ←
          </Link>
          <span className="text-white/70 font-medium">login</span>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
          
          {/* Left */}
          <div className="p-10 bg-white/3">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500" />
              <span className="text-xl font-semibold tracking-wide">
                BuddyPay
              </span>
            </div>

            <h2 className="mt-10 text-4xl font-bold leading-tight">
              Pay like a{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent">
                pro
              </span>
              <br />
              even before 18.
            </h2>

            <p className="mt-4 text-white/60 max-w-md leading-relaxed">
              A smart payment wallet built for teens. Spend online & offline
              with parent-approved limits and live tracking.
            </p>
          </div>

          {/* Right */}
          <div className="p-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Real-money payments, teen-first safety.
            </div>

            {/* Login tab (single) */}
            <div className="mt-6 bg-black/20 border border-white/10 rounded-full p-1 w-full max-w-sm">
              <div className="px-5 py-2 rounded-full text-sm text-center bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                Log in
              </div>
            </div>

            <h3 className="mt-8 text-3xl font-semibold">
              Welcome back
            </h3>

            <p className="mt-2 text-white/60 max-w-md">
              Log in with your phone. We'll send a one-time code (OTP) to verify it's you.
            </p>

            {/* OTP form */}
            <div className="mt-8 space-y-4 max-w-md">
              <div>
                <label className="text-white/70 text-sm">
                  Phone number
                </label>
                <input
                  placeholder="10-digit mobile number"
                  className="mt-2 w-full px-4 py-3 rounded-2xl bg-black/30 border border-white/10 outline-none focus:border-pink-400/60 transition"
                />
                <p className="mt-2 text-xs text-white/40">
                  Use the same number for verification.
                </p>
              </div>

              <button className="w-full py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-blue-500 font-medium hover:opacity-90 transition">
                Send OTP & continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
