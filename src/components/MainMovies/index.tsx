import MainMovie from 'components/card/MainMovie';
import { Error } from 'components/Error';
import { Loading } from 'components/Loading';
import { useBoxOffice } from 'hooks/useBoxOffice';
import { BoxOfficeCard } from 'interfaces/card';
import { useEffect, useState } from 'react';
import * as Styles from './styles';

export const MainMovies = () => {
  const { isLoading, isError, data } = useBoxOffice();
  const [movies, setMovies] = useState<BoxOfficeCard[]>([]);

  useEffect(() => {
    if (data) {
      setMovies(
        data.map((card, index) => ({
          ...card,
          id: index,
        })),
      );
    }
  }, [data]);

  if (isLoading) {
    return <Loading>박스오피스 가져오는 중...</Loading>;
  }
  if (isError) {
    return <Error />;
  }

  return (
    <Styles.Container>
      {movies.map((movie: BoxOfficeCard, index: number) => (
        <Styles.Content key={movie.id}>
          <MainMovie
            rank={index + 1}
            id={movie.id}
            title={movie.title}
            image={movie.image}
          />
        </Styles.Content>
      ))}
    </Styles.Container>
  );
};
