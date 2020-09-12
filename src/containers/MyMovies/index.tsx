import { gql } from 'apollo-boost';
import MyMovies from 'components/card/MyMovies';
import dummy from 'dummy/myMovieCards';
import { IMyMovieCard } from 'interfaces/card';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-apollo';
import { Loading } from 'components/Loading';
import { Error } from 'components/Error';

const MyMoviesContainer = () => {
  const { loading, error, data } = {
    loading: false,
    error: '',
    data: dummy,
  };
  // const { loading, error, data } = useQuery(GET_MYMOVIE_QUERY);
  const [myMovies, setMyMovies] = useState<IMyMovieCard[]>([]);

  useEffect(() => {
    if (data) {
      setMyMovies(dummy);
    }
  }, [dummy]);

  if (loading) return <Loading />;
  if (error) return <Error errorContent={error} />;
  console.log(myMovies);
  return <MyMovies myMovies={myMovies} />;
};

export default MyMoviesContainer;
