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
