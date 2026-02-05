export default function Auth() {
  return (
    <div className="container-max py-8">
      <h1 className="text-2xl font-semibold">Login / Signup</h1>
      <p className="mt-2 text-sm text-slate-500">Simple auth placeholder.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="card p-4">
          <p className="text-sm font-semibold">Login</p>
          <input
            className="mt-3 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
            placeholder="Email"
          />
          <input
            className="mt-3 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
            placeholder="Password"
            type="password"
          />
          <button className="mt-4 w-full rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
            Login
          </button>
        </div>
        <div className="card p-4">
          <p className="text-sm font-semibold">Signup</p>
          <input
            className="mt-3 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
            placeholder="Full name"
          />
          <input
            className="mt-3 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
            placeholder="Email"
          />
          <button className="mt-4 w-full rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white">
            Create account
          </button>
        </div>
      </div>
    </div>
  );
}
