import Layout from 'components/Layout';
import { SearchedMovies } from 'components/SearchedMovies';
import {
  SearchedMoviesToolbar,
  SortType,
} from 'components/SearchedMoviesToolbar';
import { useState } from 'react';

const Search = () => {
  const [sortType, setSortType] = useState(SortType.Time);

  return (
    <Layout>
      <SearchedMoviesToolbar sortType={sortType} setSortType={setSortType} />
      <SearchedMovies sortType={sortType} />
    </Layout>
  );
};

export default Search;
