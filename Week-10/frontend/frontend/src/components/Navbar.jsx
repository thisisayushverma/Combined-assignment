import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-600">
          ShelfLife
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-slate-600 hover:text-green-600 transition"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-slate-600 hover:text-green-600 transition"
          >
            How It Works
          </a>

          <a
            href="#dashboard-preview"
            className="text-slate-600 hover:text-green-600 transition"
          >
            Preview
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="rounded-lg px-4 py-2 text-slate-700 hover:bg-slate-100"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-lg bg-green-600 px-4 py-2 font-medium text-white hover:bg-green-700"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
