import { SearchedMovie } from 'components/card/SearchedMovie';
import { Loading } from 'components/Loading';
import { SortType } from 'components/SearchedMoviesToolbar';
import { TheaterTimeTable } from 'components/TheaterTimeTable';
import { useNearbyTheaters } from 'hooks/useNearbyTheaters';
import { useSetFlatMovies } from 'hooks/useSetFlatMovies';
import { SearchedMovieCard } from 'interfaces/card';
import { getMinutes } from 'lib/utils/common';
import { useCallback, useEffect, useState } from 'react';
import * as Styles from './styles';

interface SearchedMoviesProps {
  sortType: SortType;
}

export const SearchedMovies = ({ sortType }: SearchedMoviesProps) => {
  const [movies, setMovies] = useState<SearchedMovieCard[][]>([]);
  const [movieList, setMovieList] = useState<SearchedMovieCard[]>([]);

  const nearByTheaters = useNearbyTheaters();
  const flatMovieCards = useSetFlatMovies(movies, nearByTheaters);

  useEffect(() => {
    if (sortType === SortType.Time) {
      const sortMovies = flatMovieCards.sort(
        (a, b) => getMinutes(a.time) - getMinutes(b.time),
      );
      setMovieList(sortMovies);
      return;
    }

    if (sortType === SortType.Theater) {
      // const sortMovies = flatMovieCards.sort(
      //   (a, b) => getMinutes(a.time) - getMinutes(b.time),
      // );
      setMovieList(flatMovieCards);
    }
  }, [flatMovieCards, sortType]);

  useEffect(() => {
    if (nearByTheaters) {
      // Init
      setMovies(Array(nearByTheaters.length).fill(null));
    }
  }, [nearByTheaters]);

  const handleSetMovies = useCallback((
    searchedMovieCards: SearchedMovieCard[], index?: number,
  ) => {
    if (!movies[index]) {
      const movieItem = movies.map((item) => (item ? [...item] : null));
      movieItem[index] = [...searchedMovieCards];
      setMovies(movieItem);
    }
  }, [movies]);

  if (flatMovieCards.length > 0) {
    return (
      <Styles.Container>
        {movieList.map((movie: SearchedMovieCard, index: number) => (
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
              onSetMovies={handleSetMovies}
            />
          ))
      }
      </>
    );
  }

  return <Loading />;
};
