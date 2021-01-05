import { TheaterType } from 'constants/theater';

export interface BoxOfficeCard {
  id: number;
  title: string;
  image: string;
}
export interface SearchedMovieCard {
  id: string;
  type: TheaterType;
  location: string;
  image: string;
  title: string;
  time: string;
}

export interface IMyMovieCard {
  runningTime: number;
  id: string;
  title: string;
  startDate: string;
  startTime: string;
  location: string;
  audiences: IMyMovieAudience[];
  fare: number;
}

export interface IMyMovieAudience {
  seat: string;
}
