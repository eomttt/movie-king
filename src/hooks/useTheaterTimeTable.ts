import { getTheaterTimeTable } from 'apis/getTheaterTimeTable';
import { TheaterType } from 'constants/theater';
import dummy from 'dummy/theaterTimeTable';
import { useMemo } from 'react';
import { useQuery } from 'react-query';

const mock = () => dummy.timeTable;

export const useTheaterTimeTable = (theaterType: TheaterType, theaterLink: string) => {
  const {
    isLoading, isError, data,
  } = useQuery(
    ['timetable', theaterType, theaterLink],
    process.env.NODE_ENV === 'production' ? () => getTheaterTimeTable(theaterType, theaterLink) : mock,
  );

  return useMemo(() => ({
    isLoading,
    isError,
    data,
  }), [data, isLoading, isError]);
};
