import SearchBar from '@/components/SearchBar';
import MovieSearchRow from '@/feature/movies/MovieSearchRow';

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const resolvedParams = await searchParams;
  const query = resolvedParams?.q || '';

  return (
    <div className="flex flex-col w-full h-dvh bg-black pt-11">
      <div className="shrink-0">
        <SearchBar />
      </div>

      <div className="flex flex-col overflow-y-auto pb-20">
        <MovieSearchRow query={query} />
      </div>
    </div>
  );
}
