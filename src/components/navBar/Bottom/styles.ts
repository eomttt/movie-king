import styled from '@emotion/styled';
import { NavBarColor } from 'styles/color';
import {
  bottomNavBarHeight,
  bottomNavBarZIndex,
  mobileOffSet,
} from 'styles/common';

export const Container = styled.div`
  width: 100%;
  height: ${bottomNavBarHeight}px;
  max-width: ${mobileOffSet}px;
  position: fixed;
  bottom: 0;
  z-index: ${bottomNavBarZIndex};
  background-color: ${NavBarColor};
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  & a {
    flex: 1;
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
  }
`;
