import { MovieApi } from 'apis/Api';
import { TheaterType } from 'constants/theater';
import { TimeTable } from 'interfaces/timeTable';

interface Parameter {
  request: string;
  theater: TheaterType;
  theaterLink: string;
}

export const getTheaterTimeTable = (
  theaterType: TheaterType,
  theaterLink: string,
): Promise<TimeTable[]> => {
  try {
    return MovieApi.get<Parameter, TimeTable[]>({
      request: 'timetable',
      theater: theaterType,
      theaterLink,
    });
  } catch (error) {
    return error;
  }
};
