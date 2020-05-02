import {
  navBarColor,
  mobileOffSet,
  topNavBarHeight,
  topNavBarZIndex,
} from 'styles/common';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: ${topNavBarHeight}px;
  max-width: ${mobileOffSet}px;
  position: fixed;
  top: 0;
  z-index: ${topNavBarZIndex};
  background-color: ${navBarColor};
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  & img {
    width: 39px;
    margin: auto;
  }
`;
