import React from 'react';
import styled from 'styled-components';

import { mobileOffSet } from '@styles/common';

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const Content = styled.div`
  max-width: ${mobileOffSet}px;
  margin: 0 auto;
  border: 1px solid gray;
`;

const Pages = styled.div`
  padding: 5%;
`;

interface IProps {
  children: any;
}

const Layout: React.FunctionComponent<IProps> = ({ children }) => (
  <Container>
    <Content>
      <Pages>{children}</Pages>
    </Content>
  </Container>
);

export default Layout;
