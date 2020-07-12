import React, { useContext } from 'react';
import { AppHeightContext } from 'contexts/AppHeight';
import * as Styles from './styles';

interface ErrorProps {
  errorContent: string;
}

export const Error: React.FunctionComponent<ErrorProps> = ({
  errorContent,
}: ErrorProps) => {
  const { appHeight } = useContext(AppHeightContext);

  return (
    <Styles.Container height={appHeight}>
      <Styles.Content>
        {`에러가 발생했습니다. 다시 시도해 주세요 ${errorContent}`}
      </Styles.Content>
    </Styles.Container>
  );
};
