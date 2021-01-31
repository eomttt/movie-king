import { SearchedMovie } from 'components/card/SearchedMovie';
import { Loading } from 'components/Loading';
import { SortType } from 'components/SearchedMoviesToolbar';
import { TheaterTimeTable } from 'components/TheaterTimeTable';
import { TheaterType } from 'constants/theater';
import { SearchedMovieCard } from 'interfaces/card';
import { TheaterInfo } from 'interfaces/theater';
import { THEATERS as cgvTheaters } from 'lib/datum/theaters/cgv';
import { THEATERS as lotteTheaters } from 'lib/datum/theaters/lotte';
import { THEATERS as megaTheaters } from 'lib/datum/theaters/megaBox';
import { getMinutes } from 'lib/utils/common';
import { useCallback, useEffect, useState } from 'react';
import * as Styles from './styles';

interface SearchedMoviesProps {
  sortType: SortType;
}

const NEARBY_KM = 3;

export const SearchedMovies = ({ sortType }: SearchedMoviesProps) => {
  // Default is seoul city hall
  const [nowPosition, setNowPosition] = useState(null);
  const [nearByTheaters, setNearByTheaters] = useState<TheaterInfo[]>([]);
  const [movies, setMovies] = useState<SearchedMovieCard[][]>([]);
  const [flatMovieCards, setFlatMovieCards] = useState<SearchedMovieCard[]>([]);

  const getLocation = useCallback(() => {
    if (process.env.API_ENV === 'production') {
      if (navigator.geolocation) {
        console.log('Get location');
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log('Location', position);
            const { coords } = position;
            const { latitude, longitude } = coords;
            setNowPosition({
              lat: latitude,
              lng: longitude,
            });
          },
          (error) => {
            if (error.code === 1) {
              alert('위치 정보를 가져 올 수 있도록 허용해주세요.');
            }
            alert(error.message);
          },
        );
      } else {
        alert('위치 정보를 지원하지 않습니다.');
      }
    } else {
      setNowPosition({
        lat: 37.4814945,
        lng: 127.0048705,
      });
    }
  }, []);

  const arePointsNear = useCallback(
    (checkPoint) => {
      const ky = 40000 / 360;
      const kx = Math.cos((Math.PI * nowPosition.lat) / 180.0) * ky;
      const dx = Math.abs(nowPosition.lng - checkPoint.lng) * kx;
      const dy = Math.abs(nowPosition.lat - checkPoint.lat) * ky;
      return Math.sqrt(dx * dx + dy * dy) <= NEARBY_KM;
    },
    [nowPosition],
  );

  const handleSetMovies = useCallback((
    searchedMovieCards: SearchedMovieCard[], index: number,
  ) => {
    if (!movies[index]) {
      const movieItem = movies.map((item) => (item ? [...item] : null));
      movieItem[index] = [...searchedMovieCards];
      setMovies(movieItem);
    }
  }, [movies]);

  useEffect(() => {
    getLocation();
  }, [getLocation]);

  useEffect(() => {
    if (nowPosition) {
      const theaterList = [];
      // eslint-disable-next-line no-restricted-syntax
      for (const theaters of cgvTheaters) {
        // eslint-disable-next-line no-restricted-syntax
        for (const theater of theaters) {
          const { location } = theater;
          if (arePointsNear(location)) {
            theaterList.push({
              ...theater,
              type: TheaterType.CGV,
            });
          }
        }
      }

      // eslint-disable-next-line no-restricted-syntax
      for (const theaters of lotteTheaters) {
        // eslint-disable-next-line no-restricted-syntax
        for (const theater of theaters) {
          const { location } = theater;
          if (arePointsNear(location)) {
            theaterList.push({
              ...theater,
              type: TheaterType.LOTTE,
            });
          }
        }
      }

      // eslint-disable-next-line no-restricted-syntax
      for (const theaters of megaTheaters) {
        // eslint-disable-next-line no-restricted-syntax
        for (const theater of theaters) {
          const { location } = theater;
          if (arePointsNear(location)) {
            theaterList.push({
              ...theater,
              type: TheaterType.MEGABOX,
            });
          }
        }
      }
      setNearByTheaters(theaterList);
    }
  }, [arePointsNear, nowPosition]);

  useEffect(() => {
    const isAllFull = movies.every((item) => item);
    if (movies.length === nearByTheaters.length && isAllFull) {
      const flatMovies = movies.flat();
      console.log('Flat movies', flatMovies, sortType);
      if (sortType === SortType.Time) {
        const sortMovies = flatMovies.sort(
          (a, b) => getMinutes(a.time) - getMinutes(b.time),
        );
        setFlatMovieCards(sortMovies);
      } else {
        setFlatMovieCards(flatMovies);
      }
    }
  }, [movies, nearByTheaters.length, sortType]);

  useEffect(() => {
    if (nearByTheaters) {
      console.log('nearByTheaters', nearByTheaters);
      setMovies(Array(nearByTheaters.length).fill(null));
    }
  }, [nearByTheaters]);

  if (flatMovieCards.length > 0) {
    return (
      <Styles.Container>
        {flatMovieCards.map((movie: SearchedMovieCard, index: number) => (
          <Styles.Content key={movie.id}>
            <SearchedMovie
              id={movie.id}
              time={movie.time}
              image={movie.image}
              title={movie.title}
              location={movie.location}
              type={movie.type}
            />
          </Styles.Content>
        ))}
      </Styles.Container>
    );
  }

  if (nearByTheaters) {
    return (
      <>
        <Loading />
        {
          nearByTheaters.map((nearByTheater, index) => (
            <TheaterTimeTable
              index={index}
              key={`${nearByTheater.type}-${nearByTheater.title}`}
              theaterInfo={nearByTheater}
              onSetMovies={(
                searchedMovieCards: SearchedMovieCard[],
              ) => handleSetMovies(searchedMovieCards, index)}
            />
          ))
      }
      </>
    );
  }

  return <Loading />;
};
