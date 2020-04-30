import {
  bottomNavBarHeight,
  bottomNavBarZIndex,
  defaultBackgroundColor,
  mobileOffSet,
} from '@styles/common';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: ${bottomNavBarHeight}px;
  max-width: ${mobileOffSet}px;
  position: fixed;
  bottom: 0;
  z-index: ${bottomNavBarZIndex};
  background-color: ${defaultBackgroundColor};
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Item = styled.div`
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
