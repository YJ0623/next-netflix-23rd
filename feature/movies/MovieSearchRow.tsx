import MovieSearchList from './MovieSearchList';

export default function MovieSearchRow({ query }: { query: string }) {
  return <MovieSearchList query={query} />;
}
