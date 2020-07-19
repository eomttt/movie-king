import { gql } from 'apollo-boost';
import { TheaterInfo } from 'interfaces/theater';
import React, { useEffect } from 'react';
import { useQuery } from 'react-apollo';
import { ISearchedMovieCard } from 'interfaces/card';

interface TheaterTimeTableProps {
  theaterInfo: TheaterInfo;
  onSetMovies?: (movieCard: ISearchedMovieCard) => void;
}

const GET_TIMETABLE_QUERY = gql`
  query TimeTable($type: String!, $link: String!) {
    timeTable(type: $type, theaterLink: $link) {
      title
      timeInfo {
        time
      }
    }
  }
`;

const TheaterTimeTable: React.FunctionComponent<TheaterTimeTableProps> = ({
  theaterInfo,
  onSetMovies,
}: TheaterTimeTableProps) => {
  const { type, link } = theaterInfo;
  const { loading, error, data } = useQuery(GET_TIMETABLE_QUERY, {
    variables: { type, link },
  });

  useEffect(() => {
    if (loading || error) {
      return;
    }

  }, [loading, error, data.timeTable]);

  return <></>;
};

export default TheaterTimeTable;
