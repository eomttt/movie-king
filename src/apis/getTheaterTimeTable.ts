import { MovieApi } from 'apis/Api';
import { TheaterType } from 'constants/theater';
import { SearchedMovieCard } from 'interfaces/card';

interface Parameter {
  request: string;
  theater: TheaterType;
  theaterLink: string;
}

export const getTheaterTimeTable = (theaterType: TheaterType, theaterLink: string) => {
  try {
    return MovieApi.get<Parameter, SearchedMovieCard[]>({
      request: 'timetable',
      theater: theaterType,
      theaterLink: encodeURI(theaterLink),
    });
  } catch (error) {
    return error;
  }
};
