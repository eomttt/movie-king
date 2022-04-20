import { SearchedMovie } from 'components/card/SearchedMovie';
import { Loading } from 'components/Loading';
import { SortType } from 'components/SearchedMoviesToolbar';
import { TheaterTimeTable } from 'components/TheaterTimeTable';
import { TheaterType } from 'constants/theater';
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
      setMovieList(
        flatMovieCards.sort((a, b) => getMinutes(a.time) - getMinutes(b.time)),
      );
      return;
    }

    if (sortType === SortType.Theater) {
      const megaMovieCards = flatMovieCards
        .filter(flatMovieCard => flatMovieCard.type === TheaterType.MEGABOX)
        .sort((a, b) => getMinutes(a.time) - getMinutes(b.time));
      const cvgMovieCards = flatMovieCards
        .filter(flatMovieCard => flatMovieCard.type === TheaterType.CGV)
        .sort((a, b) => getMinutes(a.time) - getMinutes(b.time));
      setMovieList([...cvgMovieCards, ...megaMovieCards]);
    }
  }, [flatMovieCards, sortType]);

  useEffect(() => {
    if (nearByTheaters) {
      // Init
      setMovies(Array(nearByTheaters.length).fill(null));
    }
  }, [nearByTheaters]);

  const handleSetMovies = useCallback(
    (searchedMovieCards: SearchedMovieCard[], index?: number) => {
      if (!movies[index]) {
        const movieItem = movies.map(item => (item ? [...item] : null));
        movieItem[index] = [...searchedMovieCards];
        setMovies(movieItem);
      }
    },
    [movies],
  );

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
        {nearByTheaters.map((nearByTheater, index) => (
          <TheaterTimeTable
            index={index}
            key={`${nearByTheater.type}-${nearByTheater.title}`}
            theaterInfo={nearByTheater}
            onSetMovies={handleSetMovies}
          />
        ))}
      </>
    );
  }

  return <Loading />;
};
