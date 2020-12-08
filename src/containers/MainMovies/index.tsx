import { getBoxOffice } from 'apis/getBoxOffice';
import MainMovies from 'components/card/MainMovies';
import { Error } from 'components/Error';
import { Loading } from 'components/Loading';
import dummy from 'dummy/movieCards';
import { IMovieCard } from 'interfaces/card';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const MainMoviesContainer = () => {
  let isLoading = false;
  let isError = false;
  let data = dummy.boxOffice;

  console.log("CHECK", process.env.GQL_DEV)
  if (process.env.GQL_DEV === 'production') {
    const res = useQuery('boxoffice', getBoxOffice);
    isLoading = res.isLoading;
    isError = res.isError;
    data = res.data;
  }

  const [movies, setMovies] = useState<IMovieCard[]>([]);

  useEffect(() => {
    if (data) {
      setMovies(data);
    }
  }, [data]);

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return <MainMovies movies={movies} />;
};

export default MainMoviesContainer;
