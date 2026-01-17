import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/parent-dashboard" ||
    location.pathname === "/child-dashboard";

  // ✅ DO NOT RENDER NAVBAR AT ALL
  if (hideNavbar) return null;

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-black/30 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500" />
            <span className="text-xl font-semibold tracking-wide">
              BuddyPay
            </span>
          </Link>

          {/* Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-white transition">
              How it works
            </a>
            <a href="#parents" className="hover:text-white transition">
              For parents
            </a>
            <a href="#security" className="hover:text-white transition">
              Security
            </a>
            <a href="#faq" className="hover:text-white transition">
              FAQ
            </a>
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <NavLink
              to="/auth"
              className="px-5 py-2 rounded-full border border-white/15 text-white/90 hover:bg-white/10 transition"
            >
              Log in
            </NavLink>

            <NavLink
              to="/signup-role"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-90 transition"
            >
              Sign up
            </NavLink>
          </div>

        </div>
      </div>
    </header>
  );
}
