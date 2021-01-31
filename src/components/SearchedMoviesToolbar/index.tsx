import * as Styles from './styles';

export enum SortType {
  Time = 'Time',
  Theater = 'Theater',
}

const SortText = {
  [SortType.Time]: '시간 별',
  [SortType.Theater]: '영화관 별',
};

interface SearchedMoviesToolbarProps {
  sortType: SortType;
  setSortType: (type: SortType) => void;
}

export const SearchedMoviesToolbar = (
  { sortType, setSortType }: SearchedMoviesToolbarProps,
) => (
  <Styles.Container>
    <Styles.Content>
      <Styles.Menu
        isSelected={sortType === SortType.Time}
        onClick={() => setSortType(SortType.Time)}
      >
        {SortText[SortType.Time]}
      </Styles.Menu>
      <Styles.Menu
        isRight
        isSelected={sortType === SortType.Theater}
        onClick={() => setSortType(SortType.Theater)}
      >
        {SortText[SortType.Theater]}
      </Styles.Menu>
    </Styles.Content>
  </Styles.Container>
);
