import Bottom from 'components/navBar/Bottom';
import Top from 'components/navBar/Top';
import React from 'react';
import * as Styles from './styles';

interface IProps {
  children: any;
}

const Layout: React.FunctionComponent<IProps> = ({ children }) => (
  <Styles.Container>
    <Styles.Content>
      <Top />
      <Styles.Pages>{children}</Styles.Pages>
      <Bottom />
    </Styles.Content>
  </Styles.Container>
);

export default Layout;
