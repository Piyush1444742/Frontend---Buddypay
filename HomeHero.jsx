import { Link } from "react-router-dom";

export default function HomeHero() {
  return (
    <section id="features" className="relative">

      {/* Background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-28 -top-24 h-72 w-72 rounded-full bg-purple-600/30 blur-3xl" />
        <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute right-[-120px] bottom-[-140px] h-[420px] w-[420px] rounded-full bg-blue-700/20 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-5 py-16 md:py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Built for teens. Approved by parents.
            </div>

            <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
              Your first{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent">
                real-world wallet
              </span>
              , <br />
              unlocked before 18.
            </h1>

            <p className="mt-5 text-white/70 max-w-xl leading-relaxed">
              Send, spend and split money with friends — with built-in limits,
              live tracking and parent approval for peace of mind.
            </p>

            <div className="mt-7 flex items-center gap-4">
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 font-medium hover:opacity-90 transition">
                Get started now
              </button>

              <button className="px-6 py-3 rounded-full border border-white/15 text-white/85 hover:bg-white/10 transition">
                See how it works
              </button>
            </div>

            <ul className="mt-8 text-white/60 text-sm space-y-2">
              <li>• 12–18 only</li>
              <li>• Parent-approved payments</li>
              <li>• No credit card required</li>
            </ul>
          </div>

          {/* Right card */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-md rounded-3xl p-6 bg-white/5 border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-10 -left-10 h-44 w-44 rounded-full bg-pink-500/20 blur-2xl" />
              <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-blue-500/20 blur-2xl" />

              <div className="relative">
                <div className="flex justify-end">
                  <span className="px-3 py-1 rounded-full text-xs bg-black/40 border border-white/10 text-white/80">
                    ● Instant teen payments
                  </span>
                </div>

                <div className="mt-5 text-white/50 tracking-widest text-xs">
                  BUDDYPAY WALLET
                </div>

                <div className="mt-2 text-white/60 text-sm">
                  Available balance
                </div>

                <div className="mt-2 text-3xl font-semibold">₹ 2,500.00</div>

                <div className="mt-6 text-white/50 text-sm flex items-center justify-between">
                  <span>Next reload from Parent • Today</span>
                  <span className="text-blue-300">+₹ 500 scheduled</span>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between">
                  <div>
                    <div className="text-white/50 text-xs tracking-widest">
                      BUDDY WALLET
                    </div>
                    <div className="text-white/70 text-sm mt-1">
                      @you • BuddyPayTeens using BuddyPay right now
                    </div>
                  </div>

                  <div className="flex gap-1">
                    <div className="h-6 w-6 rounded-full bg-blue-500/90" />
                    <div className="h-6 w-6 rounded-full bg-blue-500/70" />
                    <div className="h-6 w-6 rounded-full bg-blue-500/50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
