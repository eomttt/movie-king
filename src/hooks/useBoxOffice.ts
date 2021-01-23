import { getBoxOffice } from 'apis/getBoxOffice';
import dummy from 'dummy/boxoffice';
import { useMemo } from 'react';
import { useQuery } from 'react-query';

const mock = () => dummy.boxOffice;

export const useBoxOffice = () => {
  const {
    isLoading, isError, data,
  } = useQuery('boxoffice', process.env.NODE_ENV === 'production' ? getBoxOffice : mock);

  return useMemo(() => ({
    isLoading,
    isError,
    data,
  }), [data, isLoading, isError]);
};
