import { AppHeightContext } from 'contexts/AppHeight';
import { ReactNode, useContext } from 'react';
import * as Styles from './styles';

interface LoadingProps {
  children?: ReactNode;
}

export const Loading = ({ children }: LoadingProps) => {
  const { appHeight } = useContext(AppHeightContext);

  return (
    <Styles.Container height={appHeight}>
      <Styles.Icon>
        <div className="loadingio-spinner-radio-nb9kmwa58b8">
          <div className="ldio-v6c7ss0wis">
            <div />
            <div />
            <div />
          </div>
        </div>
      </Styles.Icon>
      <Styles.Content>{children}</Styles.Content>
    </Styles.Container>
  );
};
