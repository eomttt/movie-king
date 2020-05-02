import MainMovies from 'components/card/MainMovies';
import dummy from 'dummy/movieCards';
import { IMovieCard } from 'interfaces/card';
import React, { useEffect, useState } from 'react';

const MainMoviesContainer = () => {
  const [movies, setMovies] = useState<IMovieCard[]>([]);

  useEffect(() => {
    setMovies(dummy);
  }, []);

  return <MainMovies movies={movies} />;
};

export default MainMoviesContainer;
