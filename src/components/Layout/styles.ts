import {
  bottomNavBarHeight,
  navBarColor,
  mobileOffSet,
  topNavBarHeight,
  defaultBackgroundColor,
  pagesPadding,
} from 'styles/common';
import styled from '@emotion/styled';

interface PageProps {
  height: number;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: ${defaultBackgroundColor};
`;

export const Content = styled.div`
  position: relative;
  max-width: ${mobileOffSet}px;
  margin: 0 auto;
  border-left: 1px solid ${navBarColor};
  border-right: 1px solid ${navBarColor};
`;

export const Pages = styled.div<PageProps>`
  margin-top: ${topNavBarHeight}px;
  margin-bottom: ${bottomNavBarHeight}px;
  min-height: ${(props) => {
    const { height } = props;
    return height - topNavBarHeight - bottomNavBarHeight - pagesPadding * 2;
  }}px;
  padding: ${pagesPadding}px;
`;
