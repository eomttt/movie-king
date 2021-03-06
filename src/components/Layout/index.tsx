import Bottom from 'components/navBar/Bottom';
import Top from 'components/navBar/Top';
import { AppHeightContext } from 'contexts/AppHeight';
import { useContext, useEffect } from 'react';
import {
  bottomNavBarHeight,
  pagesPadding,
  topNavBarHeight,
} from 'styles/common';
import * as Styles from './styles';

interface IProps {
  children: any;
}

const Layout = ({ children }: IProps) => {
  const { appHeight, setAppHeight } = useContext(AppHeightContext);

  useEffect(() => {
    const { innerHeight } = window;
    setAppHeight(
      innerHeight - topNavBarHeight - bottomNavBarHeight - pagesPadding * 2,
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Styles.Container>
      <Styles.Content>
        <Top />
        <Styles.Pages height={appHeight}>{children}</Styles.Pages>
        <Bottom />
      </Styles.Content>
    </Styles.Container>
  );
};

export default Layout;
