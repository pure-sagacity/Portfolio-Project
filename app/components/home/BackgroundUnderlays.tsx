export default function BackgroundUnderlays() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute left-1/2 top-[-10%] h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-white/[0.01] blur-3xl" />
    </div>
  );
}
