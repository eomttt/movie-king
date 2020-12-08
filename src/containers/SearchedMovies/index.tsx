import { Loading } from 'components/Loading';
import { MovieType } from 'constants/movie';
import dummy from 'dummy/searchedMovieCards';
import { ISearchedMovieCard } from 'interfaces/card';
import { TheaterInfo } from 'interfaces/theater';
import { THEATERS as cgvTheaters } from 'lib/datum/theaters/cgv';
import { THEATERS as lotteTheaters } from 'lib/datum/theaters/lotte';
import { THEATERS as megaTheaters } from 'lib/datum/theaters/megaBox';
import React, { useCallback, useEffect, useState } from 'react';
import TheaterTimeTable from 'containers/TheaterTimeTable';

const NEARBY_KM = 3;

const SearchedMoviesContainer = () => {
  // Default is seoul city hall
  const [nowPosition, setNowPosition] = useState(null);
  const [nearByTheaters, setNearByTheaters] = useState<TheaterInfo[]>([]);
  const [movies, setMovies] = useState<ISearchedMovieCard[][]>([]);
  const [flatMovieCards, setFlatMovieCards] = useState<ISearchedMovieCard[]>([]);

  const getLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
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

  const handleSetMovies = useCallback((searchedMovieCards: ISearchedMovieCard[], index: number) => {
    if (!movies[index]) {
      const movieItem = movies.map((item) => (item ? [...item] : null));
      movieItem[index] = [...searchedMovieCards];
      setMovies(movieItem);
    }
  }, [movies]);

  useEffect(() => {
    getLocation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              type: MovieType.CGV,
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
              type: MovieType.LOTTE,
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
              type: MovieType.MEGABOX,
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
      // console.log('Finish get movies', movies.flatMap((item) => item));
      setFlatMovieCards(movies.flatMap((item) => item));
    }
  }, [movies, nearByTheaters.length]);

  useEffect(() => {
    if (nearByTheaters) {
      console.log('https:// 된 기념 확인차 로그. Near by theaters', nearByTheaters);
      setMovies(Array(nearByTheaters.length).fill(null));
    }
  }, [nearByTheaters]);

  if (flatMovieCards.length > 0) {
    return (
      <>
        {
        flatMovieCards.map((faltMovieCard) => <div style={{ color: 'white' }} key={`faltMovieCard.id-${Math.random()}`}>{faltMovieCard.title}</div>)
      }
      </>
    );
  }

  if (nearByTheaters) {
    return (
      nearByTheaters.map((nearByTheater, index) => (
        <TheaterTimeTable
          key={`${nearByTheater.type}-${nearByTheater.title}`}
          theaterInfo={nearByTheater}
          onSetMovies={
            (searchedMovieCards: ISearchedMovieCard[]) => handleSetMovies(searchedMovieCards, index)
          }
        />
      ))
    );
  }

  return <Loading />;
};

export default SearchedMoviesContainer;
