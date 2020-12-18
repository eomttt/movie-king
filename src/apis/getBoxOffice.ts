import { IMovieCard } from 'interfaces/card';
import { MovieApi } from 'apis/Api';

interface Parameter {
  request: string;
  theater: string;
}

export const getBoxOffice = () => {
  try {
    return MovieApi.get<Parameter, IMovieCard[]>({
      request: 'box-office',
      theater: 'cgv',
    });
  } catch (error) {
    return error;
  }
};
