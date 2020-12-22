import { useTheaterTimeTable } from 'hooks/useTheaterTimeTable';
import { SearchedMovieCard } from 'interfaces/card';
import { TheaterInfo } from 'interfaces/theater';
import { memo, useEffect } from 'react';

interface TheaterTimeTableProps {
  theaterInfo: TheaterInfo;
  onSetMovies: (movieCard: SearchedMovieCard[]) => void;
}

const TheaterTimeTable = memo(({
  theaterInfo,
  onSetMovies,
}: TheaterTimeTableProps) => {
  const { title, type, link } = theaterInfo;
  const { isLoading, isError, data } = useTheaterTimeTable(type, link);

  const movies: SearchedMovieCard[] = data?.timeTable.flatMap((table, index) => {
    const { title: tableTitle, timeInfo } = table;
    return timeInfo.map(
      (info, timeIndex): SearchedMovieCard => ({
        id: `${index}-${timeIndex}`,
        type,
        location: title,
        title: tableTitle,
        time: info.time,
        // TODO:
        // Image도 어떻게 할지 생각을 해봐야겠다.
        // 지금 타임 테이블에 대해서는 이미지를 가지고 오지 않는데... 큰일이네
        image: 'http://www.kobis.or.kr/common/mast/movie/2020/01/a880f5d250f04e6bacc786342972ddf4.jpg',
      }),
    );
  });

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
    return null;
  }

  return <></>;
});

export default TheaterTimeTable;
