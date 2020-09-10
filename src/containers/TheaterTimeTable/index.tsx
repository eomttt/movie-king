import { gql } from 'apollo-boost';
import { TheaterInfo } from 'interfaces/theater';
import React, { useEffect } from 'react';
// import { useQuery } from 'react-apollo';
import { ISearchedMovieCard } from 'interfaces/card';
import timeTableDummy from 'dummy/timetable';
import SearchedMovies from 'components/card/SearchedMovies';

interface TheaterTimeTableProps {
  theaterInfo: TheaterInfo;
  onSetMovies?: (movieCard: ISearchedMovieCard) => void;
}

// const GET_TIMETABLE_QUERY = gql`
//   query TimeTable($type: String!, $link: String!) {
//     timeTable(type: $type, theaterLink: $link) {
//       title
//       timeInfo {
//         time
//       }
//     }
//   }
// `;

const TheaterTimeTable: React.FunctionComponent<TheaterTimeTableProps> = ({
  theaterInfo,
  onSetMovies,
}: TheaterTimeTableProps) => {
  const { title, type, link } = theaterInfo;
  const { loading, error, data } = {
    loading: false,
    error: null,
    data: timeTableDummy,
  };
  // const { loading, error, data } = useQuery(GET_TIMETABLE_QUERY, {
  //   variables: { type, link },
  // });

  if (loading || error) {
    return null;
  }
  const { timeTable } = timeTableDummy;
  const movies = timeTable.flatMap((table, index) => {
    const { title: tableTitle, timeInfo } = table;
    return timeInfo.map(
      (info, timeIndex): ISearchedMovieCard => ({
        id: `${index}-${timeIndex}`,
        type,
        location: title,
        title: tableTitle,
        time: info.time,
        image: 'http://www.kobis.or.kr/common/mast/movie/2020/01/a880f5d250f04e6bacc786342972ddf4.jpg',
      }),
    );
  });

  return <SearchedMovies movies={movies} />;
};

export default TheaterTimeTable;
