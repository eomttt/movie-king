import { MovieType } from 'constants/movie';

export interface TheaterInfo {
  type: MovieType;
  title?: string;
  link: string;
  location?: {
    lat: number;
    lng: number;
  };
}
