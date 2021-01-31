import { TheaterType } from 'constants/theater';
import { useTheaterTimeTable } from 'hooks/useTheaterTimeTable';
import { SearchedMovieCard } from 'interfaces/card';
import { TheaterInfo } from 'interfaces/theater';
import { memo, useEffect, useMemo } from 'react';

interface TheaterTimeTableProps {
  index: number;
  theaterInfo: TheaterInfo;
  onSetMovies: (movieCard: SearchedMovieCard[]) => void;
}

export const TheaterTimeTable = memo(({
  index,
  theaterInfo,
  onSetMovies,
}: TheaterTimeTableProps) => {
  const { title, type, link } = theaterInfo;
  const { isLoading, isError, data } = useTheaterTimeTable(
    type, type === TheaterType.LOTTE ? title : link,
  );

  const movies: SearchedMovieCard[] = useMemo(() => data?.flatMap((table, flatMapIndex) => {
    const { title: tableTitle, timeInfo, image } = table;
    return timeInfo.map(
      (info, timeIndex): SearchedMovieCard => ({
        id: `${index}-${flatMapIndex}-${timeIndex}`,
        type,
        location: title,
        title: tableTitle,
        time: info.time,
        image,
      }),
    );
  }), [index, data, title, type]);

  useEffect(() => {
    if (onSetMovies && movies) {
      onSetMovies(movies);
    }
  }, [movies, onSetMovies]);

  if (isLoading) {
    return null;
  }

  if (isError) {
    console.error('Get time table error');
    onSetMovies([]);
    return null;
  }

  return <></>;
});
