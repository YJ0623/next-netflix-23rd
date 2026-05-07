// 📁 feature/movies/components/MovieRow/CategoryListWrapper.tsx
import MovieRow from '@/feature/movies/components/MovieRow/MovieRow';
import { CATEGORIES } from '@/const/categories';

export default async function MovieRowWrapper() {
  // 🌟 여기서 Promise.all 로직을 처리합니다.
  const categoryResults = await Promise.all(
    CATEGORIES.map(async (category) => {
      const data = await category.fetcher();
      return { id: category.id, title: category.title, movies: data.results };
    })
  );

  return (
    <>
      {categoryResults.map((category) => (
        <MovieRow key={category.id} title={category.title} movies={category.movies} />
      ))}
    </>
  );
}