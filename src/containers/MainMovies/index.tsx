import MainMovies from 'components/card/MainMovies';
import { Error } from 'components/Error';
import { Loading } from 'components/Loading';
import dummy from 'dummy/movieCards';
import { IMovieCard } from 'interfaces/card';
import React, { useEffect, useState } from 'react';

const MainMoviesContainer = () => {
  // dummy data
  const { loading, error, data } = {
    loading: false,
    error: null,
    data: dummy,
  };
  // const { loading, error, data } = useQuery(GET_BOXOFFICE_QUERY);
  const [movies, setMovies] = useState<IMovieCard[]>([]);

  useEffect(() => {
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
