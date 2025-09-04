export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="h-10 w-48 mb-8 rounded-md bg-muted animate-pulse" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-border/50 bg-white/60 dark:bg-slate-800/60 backdrop-blur p-6 shadow-sm">
            <div className="aspect-[3/2] w-full rounded-md bg-muted animate-pulse" />
            <div className="mt-4 h-6 w-3/4 rounded bg-muted animate-pulse" />
            <div className="mt-2 h-4 w-1/2 rounded bg-muted animate-pulse" />
            <div className="mt-4 flex gap-2">
              <div className="h-6 w-16 rounded bg-muted animate-pulse" />
              <div className="h-6 w-20 rounded bg-muted animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


