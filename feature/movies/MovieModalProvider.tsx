'use client';

import MovieDetailModal from './MovieDetailModal';
import { createContext, useContext, useEffect, useState } from 'react';

interface MovieModalContextType {
  selectedMovieId: number | null;
  openMovieModal: (movieId: number) => void;
  closeMovieModal: () => void;
}

const MovieModalContext = createContext<MovieModalContextType | null>(null);

export function MovieModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      setSelectedMovieId(null);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const openMovieModal = (movieId: number) => {
    setSelectedMovieId(movieId);
    // 모달 열릴 때 history 추가 (뒤로가기 UX 고려)
    window.history.pushState({ movieModal: true }, '');
  };

  const closeMovieModal = () => {
    setSelectedMovieId(null);
  };

  return (
    <MovieModalContext.Provider
      value={{
        selectedMovieId,
        openMovieModal,
        closeMovieModal,
      }}
    >
      {children}

      {selectedMovieId && (
        <MovieDetailModal movieId={selectedMovieId} onClose={closeMovieModal} />
      )}
    </MovieModalContext.Provider>
  );
}

export function useMovieModal() {
  const context = useContext(MovieModalContext);

  if (!context) {
    throw new Error('useMovieModal must be used within MovieModalProvider');
  }

  return context;
}
