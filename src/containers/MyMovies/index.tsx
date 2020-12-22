import MyMovies from 'components/card/MyMovies';
import { Error } from 'components/Error';
import { Loading } from 'components/Loading';
import dummy from 'dummy/myMovieCards';
import { IMyMovieCard } from 'interfaces/card';
import { useEffect, useState } from 'react';

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
  }, [data]);

  if (loading) return <Loading />;
  if (error) return <Error errorContent={error} />;

  return <MyMovies myMovies={myMovies} />;
};

export default MyMoviesContainer;
