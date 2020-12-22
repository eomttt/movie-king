import { getBoxOffice } from 'apis/getBoxOffice';
import dummy from 'dummy/movieCards';
import { useMemo } from 'react';
import { useQuery } from 'react-query';

const mock = () => ({
  isLoading: false,
  isError: false,
  data: dummy.boxOffice,
});

export const useBoxOffice = () => {
  const {
    isLoading, isError, data,
  } = useQuery('boxoffice', process.env.GQL_DEV === 'production' ? getBoxOffice : mock);

  return useMemo(() => ({
    isLoading,
    isError,
    data,
  }), [data, isLoading, isError]);
};
