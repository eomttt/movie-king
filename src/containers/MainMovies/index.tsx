import { gql } from 'apollo-boost';
import MainMovies from 'components/card/MainMovies';
import dummy from 'dummy/movieCards';
import { IMovieCard } from 'interfaces/card';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-apollo';
import { Loading } from 'components/Loading';

const GET_BOXOFFICE_QUERY = gql`
  {
    boxOffice {
      image
      title
    }
  }
`;

const MainMoviesContainer = () => {
  // const { loading, error, data } = useQuery(GET_BOXOFFICE_QUERY);
  const { loading, error, data } = { loading: true, error: false, data: dummy };
  const [movies, setMovies] = useState<IMovieCard[]>([]);

  useEffect(() => {
    console.log("AAA", data);
    setMovies(data);
  }, [data]);

  if (loading) return <Loading />;
  if (error) return <div>{`잠시 후 다시시도해주세요. Error: ${error}`}</div>;

  return <MainMovies movies={movies} />;
};

export default MainMoviesContainer;
