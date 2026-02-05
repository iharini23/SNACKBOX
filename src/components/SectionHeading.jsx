export default function SectionHeading({ title, subtitle, action }) {
  return (
    <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
      <div>
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        {subtitle ? <p className="text-sm text-slate-500">{subtitle}</p> : null}
      </div>
      {action ? <div className="text-sm text-brand-600">{action}</div> : null}
    </div>
  );
}
