import { BoxOfficeCard } from 'interfaces/card';
import { MovieApi } from 'apis/Api';

interface Parameter {
  request: string;
  theater: string;
}

export const getBoxOffice = (): Promise<BoxOfficeCard[]> => {
  try {
    return MovieApi.get<Parameter, BoxOfficeCard[]>({
      request: 'box-office',
      theater: 'cgv',
    });
  } catch (error) {
    return error;
  }
};
