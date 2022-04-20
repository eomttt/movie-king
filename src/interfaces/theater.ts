import { TheaterType } from 'constants/theater';

export interface TheaterInfo {
  id: number;
  type: TheaterType;
  title: string;
  link: string;
  location?: {
    lat: number;
    lng: number;
  };
}
