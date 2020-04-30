import {
  bottomNavBarHeight,
  navBarColor,
  mobileOffSet,
  topNavBarHeight,
  defaultBackgroundColor,
} from '@styles/common';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: ${defaultBackgroundColor};
`;

export const Content = styled.div`
  position: relative;
  max-width: ${mobileOffSet}px;
  margin: 0 auto;
  border: 1px solid ${navBarColor};
`;

export const Pages = styled.div`
  margin-top: ${topNavBarHeight}px;
  margin-bottom: ${bottomNavBarHeight}px;
  padding: 5%;
`;
