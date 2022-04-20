import styled from '@emotion/styled';
import { Empty } from 'components/Empty';
import Layout from 'components/Layout';
import { Loading } from 'components/Loading';
import { SearchedMovies } from 'components/SearchedMovies';
import { SearchedMoviesToolbar } from 'components/SearchedMoviesToolbar';
import { useGetNearbyTheaters } from 'hooks/useGetNearbyTheaters';
import { TheaterInfo } from 'interfaces/theater';
import { useCallback, useEffect, useState } from 'react';
import { ButtonColor } from 'styles/color';
import { defaultBorder } from 'styles/common';

const Search = () => {
  const [selectedNearbyTheater, setSelectedNearbyTheater] = useState<TheaterInfo>();

  const nearbyTheaters = useGetNearbyTheaters();

  const handleChangeNearByTheater = useCallback(
    (id: number) => {
      if (!nearbyTheaters) {
        return;
      }
      setSelectedNearbyTheater(nearbyTheaters.find(theater => theater.id === id));
    },
    [nearbyTheaters],
  );

  useEffect(() => {
    if (nearbyTheaters) {
      setSelectedNearbyTheater(nearbyTheaters[0]);
    }
  }, [nearbyTheaters]);

  if (!nearbyTheaters) {
    return (
      <Layout>
        <Loading>가까운 지역에 영화관 검색중...</Loading>
      </Layout>
    );
  }

  if (nearbyTheaters.length === 0) {
    return (
      <Layout>
        <Empty content="주변에 영화관이 없어요 ㅠㅠ" />
      </Layout>
    );
  }

  if (!selectedNearbyTheater) {
    return (
      <Layout>
        <Loading>잠시만 기다려주세요.</Loading>
      </Layout>
    );
  }

  return (
    <Layout>
      <SearchedMoviesToolbar
        selectedId={selectedNearbyTheater?.id}
        nearbyTheaters={nearbyTheaters}
        onChange={handleChangeNearByTheater}
      />
      <SearchedMovies nearbyTheater={selectedNearbyTheater} />
    </Layout>
  );
};

export const ButtonContainer = styled.button`
  cursor: pointer;
  background-color: ${ButtonColor.CANCEL_GET_TIMETABLE};
  display: flex;
  padding: 5px 10px;
  border-radius: ${defaultBorder};
  & > p {
    width: 100%;
    font-weight: bold;
    text-align: center;
  }
`;

export default Search;
