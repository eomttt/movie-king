import styled from '@emotion/styled';
import { FontColor, NavBarColor } from 'styles/color';
import { PCMaxWith, topNavBarHeight, topNavBarZIndex } from 'styles/common';

export const Container = styled.div`
  width: 100%;
  height: ${topNavBarHeight}px;
  max-width: ${PCMaxWith}px;
  position: fixed;
  top: 0;
  z-index: ${topNavBarZIndex};
  background-color: ${NavBarColor};
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & p {
    color: ${FontColor.POINT};
    font-size: 20px;
    font-weight: bold;
  }
`;
