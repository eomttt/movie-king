import React from 'react';
import styled from 'styled-components';

import Top from '@components/navBar/Top';
import Bottom from '@components/navBar/Bottom';

import {
  mobileOffSet,
  topNavBarHeight,
  bottomNavBarHeight,
  defaultBackgroundColor,
} from '@styles/common';

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const Content = styled.div`
  position: relative;
  max-width: ${mobileOffSet}px;
  margin: 0 auto;
  border: 1px solid ${defaultBackgroundColor};
`;

const Pages = styled.div`
  margin-top: ${topNavBarHeight}px;
  margin-bottom: ${bottomNavBarHeight}px;
  padding: 5%;
`;

interface IProps {
  children: any;
}

const Layout: React.FunctionComponent<IProps> = ({ children }) => (
  <Container>
    <Content>
      <Top />
      <Pages>{children}</Pages>
      <Bottom />
    </Content>
  </Container>
);

export default Layout;
