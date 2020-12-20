import { getBoxOffice } from 'apis/getBoxOffice';
import dummy from 'dummy/movieCards';
import { useMemo } from 'react';
import { useQuery } from 'react-query';

export const useBoxOffice = () => {
  let isLoading = false;
  let isError = false;
  let data = dummy.boxOffice;

  console.log('GQL_DEV', process.env.GQL_DEV);
  if (process.env.GQL_DEV === 'production') {
    const res = useQuery('boxoffice', getBoxOffice);
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