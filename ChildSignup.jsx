import { Link } from "react-router-dom";

export default function ChildSignup() {
  return (
    <div className="min-h-screen bg-[#070B1E] text-white flex items-center justify-center px-5">
      <div className="w-full max-w-md rounded-3xl bg-white/5 border border-white/10 p-8 shadow-2xl">
        
        {/* Header */}
        <div className="mb-6">
          <Link to="/signup-role" className="text-white/60 hover:text-white">
            ← Back
          </Link>
          <h2 className="mt-4 text-3xl font-semibold">
            Teen signup
          </h2>
          <p className="mt-2 text-white/60">
            Create your BuddyPay account. Your parent will approve and manage it.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {/* Teen name */}
          <div>
            <label className="text-sm text-white/70">Your name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="mt-2 w-full px-4 py-3 rounded-2xl bg-black/30 border border-white/10 outline-none focus:border-pink-400/60 transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm text-white/70">Your phone number</label>
            <input
              type="tel"
              placeholder="10-digit mobile number"
              className="mt-2 w-full px-4 py-3 rounded-2xl bg-black/30 border border-white/10 outline-none focus:border-pink-400/60 transition"
            />
          </div>

          {/* Age */}
          <div>
            <label className="text-sm text-white/70">Age</label>
            <select
              className="mt-2 w-full px-4 py-3 rounded-2xl bg-black/30 border border-white/10 outline-none focus:border-pink-400/60 transition"
            >
              <option value="">Select age</option>
              {[10, 11, 12, 13, 14, 15, 16, 17, 18].map((age) => (
                <option key={age} value={age}>
                  {age}
                </option>
              ))}
            </select>
          </div>

          {/* Parent phone */}
          <div>
            <label className="text-sm text-white/70">
              Parent’s phone number
            </label>
            <input
              type="tel"
              placeholder="Parent mobile number"
              className="mt-2 w-full px-4 py-3 rounded-2xl bg-black/30 border border-white/10 outline-none focus:border-pink-400/60 transition"
            />
            <p className="mt-1 text-xs text-white/40">
              Your parent will receive an approval request.
            </p>
          </div>

          {/* CTA */}
          <button className="w-full mt-6 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 font-medium hover:opacity-90 transition">
            Send OTP & request approval
          </button>

          {/* Footer */}
          <p className="text-center text-white/50 text-sm mt-4">
            You can start using BuddyPay once your parent approves your account.
          </p>
        </div>
      </div>
    </div>
  );
}
