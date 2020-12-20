import { getTheaterTimeTable } from 'apis/getTheaterTimeTable';
import { TheaterType } from 'constants/theater';
import dummy from 'dummy/timetable';
import { useMemo } from 'react';
import { useQuery } from 'react-query';

export const useTheaterTimeTable = (theaterType: TheaterType, theaterLink: string) => {
  let isLoading = false;
  let isError = false;
  let data = dummy;

  console.log('GQL_DEV', process.env.GQL_DEV);
  if (process.env.GQL_DEV === 'production') {
    const res = useQuery(['timetable', theaterType, theaterLink], () => getTheaterTimeTable(theaterType, theaterLink));
    isLoading = res.isLoading;
    isError = res.isError;
    data = res.data;
  }

  return useMemo(() => ({
    isLoading,
    isError,
    data
  }), [data, isLoading, isError]);
}