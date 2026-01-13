import { useNavigate } from "react-router-dom";

export default function SignupRole() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#070B1E] text-white flex items-center justify-center">
      <div className="w-full max-w-md rounded-3xl bg-white/5 border border-white/10 p-10 shadow-2xl text-center">
        <h2 className="text-3xl font-semibold">Sign up as</h2>
        <p className="mt-2 text-white/60">
          Choose who will use BuddyPay
        </p>

        <div className="mt-8 flex flex-col gap-4">
          <button
  onClick={() => navigate("/signup/parent")}
  className="py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 font-medium hover:opacity-90 transition"
>
  Parent
</button>

<button
  onClick={() => navigate("/signup/child")}
  className="py-3 rounded-2xl border border-white/15 hover:bg-white/10 transition"
>
  Child
</button>

        </div>
      </div>
    </div>
  );
}
