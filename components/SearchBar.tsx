'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import SearchIcon from '@/public/icon_search.svg';
import CloseIcon from '@/public/icon_close2.svg';

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [term, setTerm] = useState(searchParams.get('q') || '');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (term.trim()) {
        router.replace(`/search?q=${encodeURIComponent(term)}`);
      } else {
        router.replace(`/search`);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [term, router]);

  const handleClear = () => {
    setTerm('');
    router.replace(`/search`);
  };

  return (
    <div className="flex flex-row items-center justify-center w-full h-13 bg-gray-800">
      <SearchIcon className="mr-2 ml-4 w-5 h-5" />
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search for a show, movie, genre, e.t.c."
        className="flex-1 bg-gray-800 text-white placeholder:text-gray-600 placeholder:text-label2 border-none focus:outline-none placeholder:truncate"
      />
      <button
        type="button"
        onClick={handleClear}
        className="mr-4 ml-auto"
        style={{ visibility: term ? 'visible' : 'hidden' }}
      >
        <CloseIcon className="w-4 h-4" />
      </button>
    </div>
  );
}
