import React from 'react';
import styled from 'styled-components';

import { mobileOffSet } from '../styles';

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const Content = styled.div`
  width: 100%;
  max-width: ${mobileOffSet}px;
  margin: 0 auto;
`;

interface IProps {
  children: any;
}

const Layout: React.FunctionComponent<IProps> = ({ children }) => (
  <Container>
    <Content>{children}</Content>
  </Container>
);

export default Layout;
