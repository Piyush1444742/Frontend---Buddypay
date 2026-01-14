const cards = [
  {
    title: "Real transactions, real life",
    desc: "Pay at stores, order food, subscribe to apps and shop online — all from one secure teen wallet.",
    icon: "₹",
  },
  {
    title: "Parent-approved limits",
    desc: "Parents decide how much you can spend, where and when. You get freedom, they get control.",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    title: "Instant notifications",
    desc: "Every payment sends a real-time alert to both teen and parent — no surprises.",
    icon: "⚡",
  },
];

export default function InfoSection() {
  return (
    <>
      {/* FEATURES */}
      <section id="features" className="relative py-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-white/40 text-sm uppercase tracking-widest">
            Why BuddyPay?
          </div>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Money freedom for teens. Safety for families.
          </h2>

          <p className="mt-3 text-white/60 max-w-3xl">
            BuddyPay gives teens the freedom to pay like adults with built-in
            rails for real life: parent controls, instant alerts, and smart limits.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((c) => (
              <div
                key={c.title}
                className="rounded-3xl bg-white/5 border border-white/10 p-6 shadow-xl hover:bg-white/10 transition"
              >
                <div className="h-11 w-11 rounded-full bg-blue-500/30 flex items-center justify-center text-lg">
                  {c.icon}
                </div>

                <h3 className="mt-4 text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🧭 HOW IT WORKS */}
      <section id="how-it-works" className="relative py-20 bg-black/20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-white/40 text-sm uppercase tracking-widest">
            How it works
          </div>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Simple for teens. Clear for parents.
          </h2>

          <p className="mt-4 text-white/60 max-w-3xl">
            Getting started with BuddyPay takes just a few minutes. Here’s how
            families get set up and start using it safely.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-lg font-semibold">1️⃣ Parent creates account</h3>
              <p className="mt-2 text-white/60 text-sm">
                A parent signs up, verifies their identity, and sets up basic
                controls like spending limits and approvals.
              </p>
            </div>

            <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-lg font-semibold">2️⃣ Teen joins with approval</h3>
              <p className="mt-2 text-white/60 text-sm">
                The teen creates their account and links it to the parent. No
                account becomes active without parental approval.
              </p>
            </div>

            <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-lg font-semibold">3️⃣ Set limits & permissions</h3>
              <p className="mt-2 text-white/60 text-sm">
                Parents choose how much can be spent, where, and when — adjusting
                limits anytime as trust grows.
              </p>
            </div>

            <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-lg font-semibold">4️⃣ Spend, learn & track</h3>
              <p className="mt-2 text-white/60 text-sm">
                Teens spend online or offline while parents track transactions
                in real time and guide healthy money habits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 👨‍👩‍👧 FOR PARENTS */}
      <section id="parents" className="relative py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-white/40 text-sm uppercase tracking-widest">
            For parents
          </div>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Stay in control. Give them freedom.
          </h2>

          <p className="mt-4 text-white/60 max-w-3xl">
            BuddyPay is designed to help parents guide their children’s financial
            journey without constant supervision or conflict.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-lg font-semibold">
                👁️ Full visibility
              </h3>
              <p className="mt-2 text-white/60 text-sm">
                Track every transaction in real time. Know where money is spent,
                when, and on what — instantly.
              </p>
            </div>

            <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-lg font-semibold">
                🎯 Smart spending limits
              </h3>
              <p className="mt-2 text-white/60 text-sm">
                Set daily, weekly, or category-based limits so your child learns
                to budget responsibly.
              </p>
            </div>

            <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-lg font-semibold">
                ❄️ Instant wallet freeze
              </h3>
              <p className="mt-2 text-white/60 text-sm">
                Freeze or unblock your child’s wallet anytime with one tap if
                something feels wrong.
              </p>
            </div>

            <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-lg font-semibold">
                🌱 Teach money habits
              </h3>
              <p className="mt-2 text-white/60 text-sm">
                Help your child build healthy money habits through guided
                spending, insights, and trust-based freedom.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* 🔐 SECURITY SECTION */}
      <section id="security" className="relative py-20 bg-black/20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-white/40 text-sm uppercase tracking-widest">
            Security
          </div>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Security you can trust. Control you can see.
          </h2>

          <p className="mt-4 text-white/60 max-w-3xl">
            BuddyPay is built with bank-grade security and parent-first controls,
            so teens can spend freely while parents stay in control.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-lg font-semibold">🔒 Secure by design</h3>
              <p className="mt-2 text-white/60 text-sm">
                Phone-based login, OTP verification, device-level security checks
                and automatic protection against suspicious activity.
              </p>
            </div>

            <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-lg font-semibold">👨‍👩‍👧 Parent controls</h3>
              <p className="mt-2 text-white/60 text-sm">
                Parents approve payments, set limits, track spending and freeze
                wallets instantly if needed.
              </p>
            </div>

            <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-lg font-semibold">⚡ Real-time alerts</h3>
              <p className="mt-2 text-white/60 text-sm">
                Every transaction sends instant notifications to both teen and
                parent — no hidden spending.
              </p>
            </div>

            <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-lg font-semibold">🧠 Smart fraud protection</h3>
              <p className="mt-2 text-white/60 text-sm">
                Intelligent checks detect unusual activity and block suspicious
                merchants automatically.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section id="faq" className="relative py-16">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl font-bold">FAQ</h2>
          <p className="mt-2 text-white/60">
            Common questions about BuddyPay and how it works.
          </p>
        </div>
      </section>
    </>
  );
}
