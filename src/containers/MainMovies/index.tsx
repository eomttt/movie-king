import { getBoxOffice } from 'apis/getBoxOffice';
import MainMovies from 'components/card/MainMovies';
import { Error } from 'components/Error';
import { Loading } from 'components/Loading';
import dummy from 'dummy/movieCards';
import { BoxOfficeCard } from 'interfaces/card';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const MainMoviesContainer = () => {
  let isLoading = false;
  let isError = false;
  let data = dummy.boxOffice;

  console.log('GQL_DEV', process.env.GQL_DEV);
  if (process.env.GQL_DEV === 'production') {
    const res = useQuery('boxoffice', getBoxOffice);
    isLoading = res.isLoading;
    isError = res.isError;
    data = res.data;
  }

  const [movies, setMovies] = useState<BoxOfficeCard[]>([]);

  useEffect(() => {
    if (data) {
      setMovies(data.map((card, index) => ({
        ...card,
        id: index,
      })));
    }
  }, [data]);

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return <MainMovies movies={movies} />;
};

export default MainMoviesContainer;
