import SearchedMovies from '@components/card/SearchedMovies';
import dummy from '@dummy/searchedMovieCards';
import { ISearchedMovieCard } from '@interfaces/card';
import React, { useEffect, useState } from 'react';

const SearchedMoviesContainer = () => {
  const [movies, setMovies] = useState<ISearchedMovieCard[]>([]);

  useEffect(() => {
    setMovies(dummy);
  }, []);

  return <SearchedMovies movies={movies} />;
};

export default SearchedMoviesContainer;
