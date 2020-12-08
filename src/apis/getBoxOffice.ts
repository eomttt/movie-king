import { MovieApi } from 'apis/Api';

export const getBoxOffice = () => MovieApi.get<{
  request: string;
  theater: string;
}>({
  request: 'box-office',
  theater: 'cgv',
});
