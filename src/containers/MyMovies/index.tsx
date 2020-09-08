import { gql } from 'apollo-boost';
import MyMovies from 'components/card/MyMovies';
// import dummy from 'dummy/movieCards';
import { IMyMovieCard } from 'interfaces/card';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-apollo';
import { Loading } from 'components/Loading';
import { Error } from 'components/Error';

const GET_BOXOFFICE_QUERY = gql`
  {
    boxOffice {
      image
      title
    }
  }
`;

const MyMoviesContainer = () => {
  // dummy data
  const audience = {
    seat: 'I13'
  };
  const audiences = [];
  audiences.push(audience);
  const { loading, error, data } = {
    loading: false,
    error: '',
    data: {
      id: '1',
      title: '타이타닉',
      time: '210',
      location: '강남역',
      audiences: [audience],
      fare: '350,000'
    },
  };
  // const { loading, error, data } = useQuery(GET_BOXOFFICE_QUERY);
  const [movies, setMyMovies] = useState<IMyMovieCard[]>([]);

  useEffect(() => {
    if (data) {
      const { title } = data;
      // setMyMovies(title);
    }
  }, [data]);

  if (loading) return <Loading />;
  if (error) return <Error errorContent={error} />;

  return <MyMovies myMovies={movies} />;
};

export default MyMoviesContainer;
