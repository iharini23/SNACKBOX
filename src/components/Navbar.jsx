import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Special Offers", to: "/offers" },
  { label: "Restaurants", to: "/restaurants" },
  { label: "Track Order", to: "/track-order" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-slate-50 px-4 py-2 text-center text-xs text-slate-600">
        🌟 Get 5% Off your first order, <span className="font-semibold text-brand-600">Promo: ORDER5</span>
      </div>
      <div className="container-max px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500 text-xl font-bold text-white">
              🍔
            </div>
            <div>
              <p className="text-xl font-bold text-slate-900">Order<span className="text-brand-500">.</span></p>
              <p className="text-xs text-slate-500">SNACKBOX</p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-1 text-sm font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 transition ${
                    isActive
                      ? "bg-brand-500 text-white"
                      : "text-slate-700 hover:bg-slate-100"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <NavLink
            to="/auth"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Login / Signup
          </NavLink>
        </div>
      </div>
    </header>
  );
}
