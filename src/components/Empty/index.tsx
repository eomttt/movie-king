import { AppHeightContext } from 'contexts/AppHeight';
import { useContext } from 'react';
import * as Styles from './styles';

interface EmptyProps {
  content: string;
}

export const Empty = ({ content }: EmptyProps) => {
  const { appHeight } = useContext(AppHeightContext);

  return (
    <Styles.Container height={appHeight}>
      <Styles.Content>{content}</Styles.Content>
    </Styles.Container>
  );
};
