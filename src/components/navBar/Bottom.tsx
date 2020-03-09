import React from 'react';

import styled from 'styled-components';

import {
  mobileOffSet,
  defaultBackgroundColor,
  bottomNavBarZIndex,
  bottomNavBarHeight,
} from '@styles/common';

import { HOME, SEARCH, MY_PAGE } from '@constants/navBar';

const Container = styled.div`
  width: 100%;
  height: ${bottomNavBarHeight}px;
  max-width: ${mobileOffSet}px;
  position: fixed;
  bottom: 0;
  z-index: ${bottomNavBarZIndex};
  background-color: ${defaultBackgroundColor};
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Item = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  & img {
    width: 20px;
    margin: auto;
  }
  & div {
    margin: auto;
    color: white;
    font-size: 9px;
  }
`;

const Bottom = () => (
  <Container>
    <Content>
      <Item>
        <img src={HOME} alt="home" />
        <div>홈</div>
      </Item>
      <Item>
        <img src={SEARCH} alt="search" />
        <div>검색</div>
      </Item>
      <Item>
        <img src={MY_PAGE} alt="my page" />
        <div>마이페이지</div>
      </Item>
    </Content>
  </Container>
);

export default Bottom;
