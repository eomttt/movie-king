import SearchedMovies from 'components/card/SearchedMovies';
import timeTableDummy from 'dummy/timetable';
import { useQuery } from 'react-apollo';
import { ISearchedMovieCard } from 'interfaces/card';
import { TheaterInfo } from 'interfaces/theater';
import React, { useEffect } from 'react';
import { GET_TIMETABLE_QUERY } from 'query/TimeTable';
import { Loading } from 'components/Loading';
import { ITimeTableData } from 'interfaces/timeTable';

interface TheaterTimeTableProps {
  theaterInfo: TheaterInfo;
  onSetMovies?: (movieCard: ISearchedMovieCard[]) => void;
}

const TheaterTimeTable: React.FunctionComponent<TheaterTimeTableProps> = React.memo(({
  theaterInfo,
  onSetMovies,
}: TheaterTimeTableProps) => {
  const { title, type, link } = theaterInfo;
  // const { loading, error, data } = {
  //   loading: false,
  //   error: null,
  //   data: timeTableDummy,
  // };
  const { loading, error, data } = useQuery<ITimeTableData>(GET_TIMETABLE_QUERY, {
    variables: { type, link },
  });

  const movies: ISearchedMovieCard[] = data?.timeTable.flatMap((table, index) => {
    const { title: tableTitle, timeInfo } = table;
    return timeInfo.map(
      (info, timeIndex): ISearchedMovieCard => ({
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

  if (loading) {
    return null;
  }

  if (error) {
    console.log("Error", error);
    return null;
  }

  return <></>;
});

export default TheaterTimeTable;
