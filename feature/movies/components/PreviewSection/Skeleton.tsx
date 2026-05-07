export default function PreviewSectionSkeleton() {
  return (
    <section className="mt-8 px-4 animate-pulse">
      <div className="mb-4 h-8 w-28 bg-gray-700 rounded-sm" />
      <div className="flex gap-[7px] overflow-hidden">
        
        {Array.from({ length: 8 }).map((_, index) => (
          <div 
            key={`preview-skel-${index}`} 
            className="h-[102px] w-[102px] shrink-0 rounded-full bg-gray-800"
          />
        ))}
      </div>
    </section>
  );
}