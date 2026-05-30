export default function Loading() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <div className="skeleton h-4 w-24" />
      <div className="skeleton mt-4 h-9 w-1/2" />
      <div className="skeleton mt-2 h-5 w-2/3" />
      <div className="mt-8 space-y-px rounded-2xl border p-1">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="space-y-2 p-5">
            <div className="skeleton h-5 w-1/2" />
            <div className="skeleton h-4 w-3/4" />
          </div>
        ))}
      </div>
    </div>
  );
}
