import { useContext } from 'react';
import { AppHeightContext } from 'contexts/AppHeight';
import * as Styles from './styles';

export const Loading = () => {
  const { appHeight } = useContext(AppHeightContext);

  return (
    <Styles.Container height={appHeight}>
      <Styles.Content>로딩 중...</Styles.Content>
    </Styles.Container>
  );
};
