export default function Restaurants() {
  return (
    <div className="container-max py-8">
      <h1 className="text-2xl font-semibold">Restaurants</h1>
      <p className="mt-2 text-sm text-slate-500">
        List of nearby restaurants.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {Array.from({ length: 9 }, (_, index) => (
          <div key={index} className="card p-4">
            <div className="h-24 rounded-xl bg-slate-100"></div>
            <p className="mt-3 text-sm font-semibold">Restaurant {index + 1}</p>
            <p className="text-xs text-slate-500">Open · 20-25 mins</p>
          </div>
        ))}
      </div>
    </div>
  );
}
