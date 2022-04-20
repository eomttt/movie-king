import { SearchedMovieCard } from 'interfaces/card';
import { TheaterInfo } from 'interfaces/theater';
import { useEffect, useState } from 'react';

export const useSetFlatMovies = (movies: SearchedMovieCard[][],
  nearByTheaters: TheaterInfo[]) => {
  const [flatMovieCards, setFlatMovieCards] = useState<SearchedMovieCard[]>([]);

  useEffect(() => {
    const isAllFull = movies.every((item) => item);
    if (movies.length === nearByTheaters.length && isAllFull) {
      const flatMovies = movies.flat();
      setFlatMovieCards(flatMovies);
    }
  }, [movies, nearByTheaters.length]);

  return flatMovieCards;
};
