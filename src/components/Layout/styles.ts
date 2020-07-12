import styled from '@emotion/styled';
import { NavBarColor, BackgroundColor } from 'styles/color';
import {
  bottomNavBarHeight,
  mobileOffSet,
  pagesPadding,
  topNavBarHeight,
} from 'styles/common';

interface PageProps {
  height: number;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: ${BackgroundColor};
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: ${mobileOffSet}px;
  margin: 0 auto;
  border-left: 1px solid ${NavBarColor};
  border-right: 1px solid ${NavBarColor};
`;

export const Pages = styled.div<PageProps>`
  margin-top: ${topNavBarHeight}px;
  margin-bottom: ${bottomNavBarHeight}px;
  min-height: ${(props) => props.height}px;
  padding: ${pagesPadding}px;
`;
