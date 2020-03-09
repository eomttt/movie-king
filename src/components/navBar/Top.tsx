import React from 'react';

import styled from 'styled-components';

import {
  mobileOffSet,
  defaultBackgroundColor,
  topNavBarZIndex,
  topNavBarHeight,
} from '@styles/common';

import { LOGO_ICON } from '@constants/common';

const Container = styled.div`
  width: 100%;
  height: ${topNavBarHeight}px;
  max-width: ${mobileOffSet}px;
  position: fixed;
  top: 0;
  z-index: ${topNavBarZIndex};
  background-color: ${defaultBackgroundColor};
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  & img {
    width: 39px;
    margin: auto;
  }
`;

const Top = () => (
  <Container>
    <Content>
      <img src={LOGO_ICON} alt="Logo" />
    </Content>
  </Container>
);

export default Top;
