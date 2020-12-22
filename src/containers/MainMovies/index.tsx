import MainMovies from 'components/card/MainMovies';
import { Error } from 'components/Error';
import { Loading } from 'components/Loading';
import { useBoxOffice } from 'hooks/useBoxOffice';
import { BoxOfficeCard } from 'interfaces/card';
import { useEffect, useState } from 'react';

const MainMoviesContainer = () => {
  const { isLoading, isError, data } = useBoxOffice();
  console.log('CHECK', data);
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
