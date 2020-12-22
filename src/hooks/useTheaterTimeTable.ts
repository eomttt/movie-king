import { getTheaterTimeTable } from 'apis/getTheaterTimeTable';
import { TheaterType } from 'constants/theater';
import dummy from 'dummy/timetable';
import { useMemo } from 'react';
import { useQuery } from 'react-query';

const mock = () => ({
  isLoading: false,
  isError: false,
  data: dummy,
});

export const useTheaterTimeTable = (theaterType: TheaterType, theaterLink: string) => {
  const {
    isLoading, isError, data,
  } = useQuery(
    ['timetable', theaterType, theaterLink],
    process.env.GQL_DEV === 'production' ? () => getTheaterTimeTable(theaterType, theaterLink) : mock,
  );

  return useMemo(() => ({
    isLoading,
    isError,
    data,
  }), [data, isLoading, isError]);
};
