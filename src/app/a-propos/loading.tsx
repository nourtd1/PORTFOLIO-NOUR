export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-8">
      <div className="h-10 w-56 rounded bg-muted animate-pulse" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="h-48 rounded bg-muted animate-pulse" />
        <div className="h-48 rounded bg-muted animate-pulse" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-32 rounded bg-muted animate-pulse" />
        ))}
      </div>
    </div>
  );
}


