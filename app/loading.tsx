export default function Loading() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="relative w-10 h-10">
        {/* Outer ring */}
        <div className="absolute inset-0 border-2 border-border rounded-full"></div>
        {/* Spinning ring */}
        <div className="absolute inset-0 border-2 border-transparent border-t-primary rounded-full animate-spin"></div>
      </div>
    </main>
  );
}