import { getBoxOffice } from 'apis/getBoxOffice';
import MainMovies from 'components/card/MainMovies';
import { Error } from 'components/Error';
import { Loading } from 'components/Loading';
import dummy from 'dummy/movieCards';
import { IMovieCard } from 'interfaces/card';
import React, { useEffect, useState } from 'react';
import { useQuery, useQueryCache } from 'react-query';

const MainMoviesContainer = () => {
  const cache = useQueryCache();
  // const todosQuery = useQuery('todos', getTodos)

  // dummy data
  const { loading, error, data } = {
    loading: false,
    error: null,
    data: dummy,
  };
  // const { loading, error, data } = useQuery(GET_BOXOFFICE_QUERY);
  const [movies, setMovies] = useState<IMovieCard[]>([]);

  const test = async () => {
    const res = await getBoxOffice();
    console.log("CCCC", res);
  }

  useEffect(() => {
    test();
    if (data) {
      const { boxOffice } = data;
      setMovies(boxOffice);
    }
  }, [data]);

  if (loading) return <Loading />;
  if (error) return <Error errorContent={error} />;

  return <MainMovies movies={movies} />;
};

export default MainMoviesContainer;
