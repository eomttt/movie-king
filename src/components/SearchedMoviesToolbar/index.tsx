/* eslint-disable implicit-arrow-linebreak */
import { TheaterInfo } from 'interfaces/theater';
import { createRef, RefObject, useCallback, useMemo, useRef } from 'react';
import * as Styles from './styles';

interface SearchedMoviesToolbarProps {
  selectedId: number;
  nearbyTheaters: TheaterInfo[];
  onChange: (id: number) => void;
}

const getListItemCenterOffset = (list: HTMLUListElement, item: HTMLLIElement) =>
  item.offsetLeft + item.offsetWidth / 2 - list.offsetWidth / 2;

export const SearchedMoviesToolbar = ({
  selectedId,
  nearbyTheaters,
  onChange,
}: SearchedMoviesToolbarProps) => {
  const ulListRef = useRef<HTMLUListElement>(null);

  const itemRefsMap = useMemo(
    () =>
      nearbyTheaters.reduce<Record<number, RefObject<HTMLLIElement>>>(
        (acc, nearbyTheater) => {
          acc[nearbyTheater.id] = createRef<HTMLLIElement>();
          return acc;
        },
        {},
      ),
    [nearbyTheaters],
  );

  const handleClickItem = useCallback(
    (id: number) => {
      if (ulListRef && itemRefsMap) {
        const { current: itemCurrent } = itemRefsMap[id];
        const { current: listCurrent } = ulListRef;

        if (itemCurrent && listCurrent) {
          const offset = getListItemCenterOffset(listCurrent, itemCurrent);
          listCurrent.scrollLeft = offset;
        }
      }
      onChange(id);
    },
    [itemRefsMap, onChange],
  );

  return (
    <Styles.Container>
      <Styles.Content ref={ulListRef}>
        {nearbyTheaters.map(nearbyTheater => (
          <Styles.Menu
            ref={itemRefsMap[nearbyTheater.id]}
            key={nearbyTheater.id}
            isSelected={nearbyTheater.id === selectedId}
            onClick={() => handleClickItem(nearbyTheater.id)}>
            {`${nearbyTheater.type.toUpperCase()} ${nearbyTheater.title}`}
          </Styles.Menu>
        ))}
      </Styles.Content>
    </Styles.Container>
  );
};
