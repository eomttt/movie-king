import { AppHeightContext } from 'contexts/AppHeight';
import { useContext } from 'react';
import * as Styles from './styles';

export const Loading = () => {
  const { appHeight } = useContext(AppHeightContext);

  return (
    <Styles.Container height={appHeight}>
      <Styles.Content>잠시만 기다려주세요...</Styles.Content>
    </Styles.Container>
  );
};
