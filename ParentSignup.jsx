import { Link } from "react-router-dom";

export default function ParentSignup() {
  return (
    <div className="min-h-screen bg-[#070B1E] text-white flex items-center justify-center px-5">
      <div className="w-full max-w-md rounded-3xl bg-white/5 border border-white/10 p-8 shadow-2xl">
        
        {/* Header */}
        <div className="mb-6">
          <Link to="/signup-role" className="text-white/60 hover:text-white">
            ← Back
          </Link>
          <h2 className="mt-4 text-3xl font-semibold">
            Parent signup
          </h2>
          <p className="mt-2 text-white/60">
            Create a parent account to manage and approve your child’s payments.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {/* Full name */}
          <div>
            <label className="text-sm text-white/70">Full name</label>
            <input
              type="text"
              placeholder="Parent full name"
              className="mt-2 w-full px-4 py-3 rounded-2xl bg-black/30 border border-white/10 outline-none focus:border-pink-400/60 transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm text-white/70">Phone number</label>
            <input
              type="tel"
              placeholder="10-digit mobile number"
              className="mt-2 w-full px-4 py-3 rounded-2xl bg-black/30 border border-white/10 outline-none focus:border-pink-400/60 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-white/70">Email address</label>
            <input
              type="email"
              placeholder="you@email.com"
              className="mt-2 w-full px-4 py-3 rounded-2xl bg-black/30 border border-white/10 outline-none focus:border-pink-400/60 transition"
            />
          </div>

          {/* Relationship */}
          <div>
            <label className="text-sm text-white/70">Relationship</label>
            <select
              className="mt-2 w-full px-4 py-3 rounded-2xl bg-black/30 border border-white/10 outline-none focus:border-pink-400/60 transition"
            >
              <option value="">Select relationship</option>
              <option>Father</option>
              <option>Mother</option>
              <option>Guardian</option>
            </select>
          </div>

          {/* Aadhaar number */}
<div>
  <label className="text-sm text-white/70">Aadhaar number</label>
  <input
    type="text"
    inputMode="numeric"
    maxLength={12}
    placeholder="12-digit Aadhaar number"
    className="mt-2 w-full px-4 py-3 rounded-2xl bg-black/30 border border-white/10 outline-none focus:border-pink-400/60 transition"
  />
  <p className="mt-1 text-xs text-white/40">
    Used only for identity verification.
  </p>
</div>

{/* Aadhaar consent */}
<div className="flex items-start gap-3 mt-2">
  <input
    type="checkbox"
    className="mt-1 accent-pink-500"
  />
  <p className="text-xs text-white/60 leading-relaxed">
    I consent to the use of my Aadhaar number for identity verification as per
    applicable regulations.
  </p>
</div>


          {/* CTA */}
          <button className="w-full mt-6 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 font-medium hover:opacity-90 transition">
            Send OTP & continue
          </button>

          {/* Footer */}
          <p className="text-center text-white/50 text-sm mt-4">
            This account will be used to approve and monitor your child’s spending.
          </p>
        </div>
      </div>
    </div>
  );
}
