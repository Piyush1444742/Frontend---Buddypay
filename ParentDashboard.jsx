import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function ParentDashboard() {
  const navigate = useNavigate();
  const [isFrozen, setIsFrozen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070B1E] text-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-5 py-16">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">Parent Dashboard</h1>
            <p className="mt-2 text-white/60">
              Monitor, control, and guide your child’s spending.
            </p>
          </div>

          <button
            onClick={() => navigate("/")}
            className="px-5 py-2 rounded-full border border-white/15 hover:bg-white/10 transition"
          >
            Logout
          </button>
        </div>

        {/* 🌟 WALLET + NOTIFICATIONS */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 💳 WALLET BALANCE */}
          <div className="relative rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-6 overflow-hidden">
            {/* Glow */}
            <div className="absolute -top-16 -right-16 h-48 w-48 bg-purple-500/30 blur-3xl rounded-full" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-widest text-white/50">
                  CHILD WALLET BALANCE
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    isFrozen
                      ? "bg-red-500/20 text-red-300"
                      : "bg-green-500/20 text-green-300"
                  }`}
                >
                  {isFrozen ? "Frozen" : "Active"}
                </span>
              </div>

              <div className="mt-4 text-4xl font-semibold">
                ₹ 2,500
              </div>

              <p className="mt-1 text-white/50 text-sm">
                Last updated just now
              </p>

              <button
                onClick={() => setIsFrozen(!isFrozen)}
                className={`mt-6 w-full py-2 rounded-full text-sm font-medium transition ${
                  isFrozen
                    ? "bg-green-500/20 text-green-300 hover:bg-green-500/30"
                    : "bg-red-500/20 text-red-300 hover:bg-red-500/30"
                }`}
              >
                {isFrozen ? "Unfreeze Wallet" : "Freeze Wallet"}
              </button>
            </div>
          </div>

          {/* 🔔 NOTIFICATIONS */}
          <div className="md:col-span-2 rounded-3xl bg-white/5 border border-white/10 p-6">
            <h3 className="text-lg font-semibold mb-4">
              Notifications
            </h3>

            <div className="space-y-4">
              {/* Notification item */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-black/30 border border-white/5">
                <span className="h-3 w-3 mt-2 rounded-full bg-yellow-400" />
                <div>
                  <p className="text-sm">
                    Spending request of <strong>₹320</strong> from Zomato
                  </p>
                  <span className="text-xs text-white/40">
                    2 minutes ago
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-black/30 border border-white/5">
                <span className="h-3 w-3 mt-2 rounded-full bg-blue-400" />
                <div>
                  <p className="text-sm">
                    Daily spending limit reached 75%
                  </p>
                  <span className="text-xs text-white/40">
                    Today
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-black/30 border border-white/5">
                <span className="h-3 w-3 mt-2 rounded-full bg-green-400" />
                <div>
                  <p className="text-sm">
                    Wallet reloaded with ₹500
                  </p>
                  <span className="text-xs text-white/40">
                    Yesterday
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🎯 LIMITS */}
        <div className="mt-12 rounded-3xl bg-white/5 border border-white/10 p-6">
          <h3 className="text-lg font-semibold">Spending Limits</h3>
          <p className="mt-1 text-white/60 text-sm">
            Daily usage overview
          </p>

          <div className="mt-4">
            <div className="flex justify-between text-xs text-white/50 mb-1">
              <span>₹1,500 spent</span>
              <span>₹2,000 limit</span>
            </div>
            <div className="h-2 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-pink-500 to-purple-500"
                style={{ width: "75%" }}
              />
            </div>
          </div>
        </div>

        {/* 📄 TRANSACTIONS */}
        <div className="mt-12 rounded-3xl bg-white/5 border border-white/10 p-6">
          <h3 className="text-lg font-semibold mb-4">
            Recent Transactions
          </h3>

          <div className="space-y-3">
            {[
              { name: "Zomato", amount: "-₹320" },
              { name: "Book Store", amount: "-₹150" },
              { name: "Wallet Reload", amount: "+₹500" },
            ].map((t, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-xl bg-black/30 px-4 py-3"
              >
                <span className="text-white/80">{t.name}</span>
                <span
                  className={`font-medium ${
                    t.amount.startsWith("+")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {t.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
