
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
    desc: "Every payment sends a real-time alert to both you and your parent — no more “where did the money go?”.",
    icon: "⚡",
  },
  {
    title: "Learn money skills",
    desc: "Track spending, set savings goals and understand where your money goes each month.",
    icon: "🧠",
  },
  {
    title: "Teen-first security",
    desc: "Phone-based login, PIN protection, OTP for new devices and smart fraud checks built in.",
    icon: "🔒",
  },
  {
    title: "Made for 12–18",
    desc: "Designed for teens who can’t open a regular bank account yet — but still live online.",
    icon: "💛",
  },
];

export default function InfoSection() {
  return (
    <section id="faq" className="relative py-16">

      <div className="max-w-6xl mx-auto px-5">
        <div className="text-white/40 text-sm uppercase tracking-widest">
          Why BuddyPay?
        </div>

        <h2 className="mt-3 text-3xl md:text-4xl font-bold">
          Money freedom for teens. Safety for families.
        </h2>

        <p className="mt-3 text-white/60 max-w-3xl">
          BuddyPay gives you the freedom to pay like an adult with rails built
          for real life: parent controls, instant notifications and smart limits.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-3xl bg-white/5 border border-white/10 p-6 shadow-xl hover:bg-white/7 transition"
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
  );
}
