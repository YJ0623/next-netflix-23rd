export default function HeroCarouselSkeleton() {
  return (
    <div className="relative w-full h-100 md:h-[80vh] overflow-hidden bg-gray-900 animate-pulse">
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent" />
      <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center gap-1.5">
      </div>
    </div>
  );
}