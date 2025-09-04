export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="h-10 w-64 mb-8 rounded-md bg-muted animate-pulse" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-4">
          <div className="h-10 w-full rounded bg-muted animate-pulse" />
          <div className="h-10 w-full rounded bg-muted animate-pulse" />
          <div className="h-32 w-full rounded bg-muted animate-pulse" />
          <div className="h-10 w-48 rounded bg-muted animate-pulse" />
        </div>
        <div className="space-y-4">
          <div className="h-24 w-full rounded bg-muted animate-pulse" />
          <div className="h-24 w-full rounded bg-muted animate-pulse" />
          <div className="h-24 w-full rounded bg-muted animate-pulse" />
        </div>
      </div>
    </div>
  );
}


