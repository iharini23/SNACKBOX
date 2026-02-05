export default function TrackOrder() {
  return (
    <div className="container-max py-8">
      <h1 className="text-2xl font-semibold">Track Order</h1>
      <p className="mt-2 text-sm text-slate-500">
        Enter your order ID to track delivery status.
      </p>
      <div className="mt-6 card p-4 max-w-md">
        <label className="text-xs font-semibold text-slate-600">Order ID</label>
        <input
          className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
          placeholder="e.g. SBX-30291"
        />
        <button className="mt-4 w-full rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white">
          Track
        </button>
      </div>
    </div>
  );
}
