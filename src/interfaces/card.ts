import { MovieType } from 'constants/movie';

export interface IMovieCard {
  id: string;
  title: string;
  image: string;
  rating: string;
}

export interface ISearchedMovieCard {
  id: string;
  type: MovieType;
  location: string;
  image: string;
  title: string;
  time: string;
}

export interface IMyMovieCard {
  time: string;
  id: string;
  title: string;
  runningtime: string;
  location: string;
  audiences: IMyMovieAudience[];
  fare: string;
}

export interface IMyMovieAudience {
  seat: string;
}
