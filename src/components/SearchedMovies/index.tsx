import { SearchedMovie } from 'components/card/SearchedMovie';
import { Empty } from 'components/Empty';
import { Error } from 'components/Error';
import { Loading } from 'components/Loading';
import { TheaterType } from 'constants/theater';
import { useGetTheaterTimeTable } from 'hooks/useTheaterTimeTable';
import { SearchedMovieCard } from 'interfaces/card';
import { TheaterInfo } from 'interfaces/theater';
import { getMinutes } from 'lib/utils/common';
import { useMemo } from 'react';
import * as Styles from './styles';

interface SearchedMoviesProps {
  nearbyTheater: TheaterInfo;
}

export const SearchedMovies = ({ nearbyTheater }: SearchedMoviesProps) => {
  const { data, isLoading, isError } = useGetTheaterTimeTable(
    nearbyTheater.type,
    nearbyTheater.type === TheaterType.LOTTE ? nearbyTheater.title : nearbyTheater.link,
  );

  const movieCards: SearchedMovieCard[] = useMemo(
    () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      data
        ?.flatMap((table, flatMapIndex) => {
          const { title: tableTitle, timeInfo, image } = table;
          return timeInfo.map(
            (info, timeIndex): SearchedMovieCard => ({
              id: `${flatMapIndex}-${timeIndex}`,
              type: nearbyTheater.type,
              location: nearbyTheater.title,
              title: tableTitle,
              time: info.time,
              image,
            }),
          );
        })
        .sort((a, b) => getMinutes(a.time) - getMinutes(b.time)),
    [data, nearbyTheater.title, nearbyTheater.type],
  );

  if (!data && isLoading) {
    return <Loading>시간표 가져오는 중...</Loading>;
  }

  if (data.length === 0) {
    return <Empty content="현재 상영하는 영화가 없어요. ㅠㅠ" />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <Styles.Container>
      {movieCards.map((movie: SearchedMovieCard, index: number) => (
        <Styles.Content key={movie.id}>
          <SearchedMovie
            id={movie.id}
            time={movie.time}
            image={movie.image}
            title={movie.title}
            location={movie.location}
            type={movie.type}
          />
        </Styles.Content>
      ))}
    </Styles.Container>
  );
};
