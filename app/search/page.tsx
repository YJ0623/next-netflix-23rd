import SearchBar from '@/components/SearchBar';
import MovieSearchRow from '@/feature/movies/MovieSearchRow';
import NavBar from '@/components/Navbar';

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

      <div className="flex-1 overflow-y-auto scrollbar-hide pb-20">
        <MovieSearchRow query={query} />
      </div>

      <NavBar />
    </div>
  );
}
