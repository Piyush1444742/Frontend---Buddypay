import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// Navbar intentionally removed

export default function ChildDashboard() {
  const navigate = useNavigate();

  const [balance, setBalance] = useState(0);
  const targetBalance = 2500;
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += 50;
      if (start >= targetBalance) {
        start = targetBalance;
        clearInterval(interval);
      }
      setBalance(start);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#070B1E] text-white">
      <div className="max-w-6xl mx-auto px-5 py-16">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">Child Dashboard</h1>
            <p className="mt-2 text-white/60">
              Scan, send, save and track your money.
            </p>
          </div>

          <button
  onClick={() => navigate("/")}
  className="px-5 py-2 rounded-full bg-gradient-to-r from-rose-500 to-red-600 text-white hover:opacity-90 transition"
>
  Logout
</button>

        </div>

        {/* 🎉 SUPER CREATIVE SCAN QR */}
        <div
          onClick={() => setShowQR(true)}
          className="mt-12 relative cursor-pointer"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-72 w-72 rounded-full bg-purple-500/30 blur-3xl animate-pulse" />
          </div>

          <div className="relative rounded-3xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 p-10 overflow-hidden">
            <div className="absolute top-6 right-6 grid grid-cols-3 gap-2 opacity-30">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="h-2 w-2 bg-white rounded-sm" />
              ))}
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-4xl font-bold">Scan QR</h2>
                <p className="mt-3 text-white/90 max-w-sm">
                  Scan any QR to send money instantly.
                  Fast, safe and parent-approved.
                </p>

                <div className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-black/30 backdrop-blur text-white font-medium">
                  📷 Tap to scan
                </div>
              </div>

              <div className="relative">
                <div className="h-40 w-40 rounded-2xl bg-white p-4 grid grid-cols-5 gap-2">
                  {[...Array(25)].map((_, i) => (
                    <div
                      key={i}
                      className={`${
                        Math.random() > 0.5 ? "bg-black" : "bg-transparent"
                      } rounded-sm`}
                    />
                  ))}
                </div>
                <div className="absolute inset-0 border-4 border-white/70 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* 💳 COMPACT WALLET */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-white/5 border border-white/10 p-6 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 h-32 w-32 bg-pink-500/30 blur-3xl rounded-full" />

            <div className="relative">
              <div className="text-white/50 text-xs tracking-widest">
                WALLET BALANCE
              </div>
              <div className="mt-2 text-3xl font-bold">
                ₹ {balance.toLocaleString()}
              </div>

              <div className="mt-3">
                <div className="flex justify-between text-xs text-white/50 mb-1">
                  <span>Daily limit</span>
                  <span>₹1,500 / ₹2,000</span>
                </div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-pink-500 to-purple-500"
                    style={{ width: "75%" }}
                  />
                </div>
              </div>

              <span className="inline-block mt-4 px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-300 border border-green-400/30">
                ✔ Parent approved
              </span>
            </div>
          </div>

          {/* QUICK ACTIONS */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Transactions", icon: "📄" },
              { label: "Savings", icon: "💰" },
              { label: "Profile", icon: "👤" },
              { label: "Limits", icon: "🚦" },
            ].map((a) => (
              <div
                key={a.label}
                className="rounded-3xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition cursor-pointer flex flex-col items-center justify-center text-center"
              >
                <div className="text-2xl">{a.icon}</div>
                <div className="mt-2 text-sm text-white/70">
                  {a.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RECENT TRANSACTIONS */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">
            Recent transactions
          </h2>

          <div className="space-y-3">
            {[
              { name: "Zomato", amount: "-₹320" },
              { name: "Book Store", amount: "-₹150" },
              { name: "Parent reload", amount: "+₹500" },
            ].map((t, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-2xl bg-white/5 border border-white/10 px-5 py-3"
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

      {/* QR MODAL */}
      {showQR && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="rounded-3xl bg-[#0E1433] border border-white/10 p-8 w-full max-w-sm text-center">
            <h3 className="text-xl font-semibold">Scan QR</h3>
            <p className="mt-2 text-white/60 text-sm">
              Point your camera at a QR code.
            </p>

            <div className="mt-6 h-40 rounded-xl border-4 border-dashed border-purple-400/50 flex items-center justify-center text-white/40">
              📷 Camera Preview
            </div>

            <button
              onClick={() => setShowQR(false)}
              className="mt-6 w-full py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 font-medium hover:opacity-90 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
