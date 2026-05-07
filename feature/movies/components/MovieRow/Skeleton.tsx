// 📁 추천 경로: src/feature/movies/components/MovieRow/Skeleton.tsx

export default function MovieRowSkeleton() {
  return (
    <section className="mt-8 px-4 animate-pulse">
      <div className="mb-4 h-6 w-32 bg-gray-700 rounded-sm" />
      <div className="flex gap-[7px] overflow-hidden">
        
        {Array.from({ length: 8 }).map((_, index) => (
          <div 
            key={`row-skel-${index}`} 
            className="shrink-0 w-[103px] h-[177px] bg-gray-800 rounded-sm"
          />
        ))}
      </div>
    </section>
  );
}