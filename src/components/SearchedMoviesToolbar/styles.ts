import styled from '@emotion/styled';
import { FontColor } from 'styles/color';

interface MenuProps {
  isSelected: boolean;
}

export const Container = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

export const Content = styled.ul`
  width: 100%;
  display: flex;
  overflow-x: scroll;

  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }

  * + * {
    margin-left: 10px;
  }
`;

export const Menu = styled.li<MenuProps>`
  font-size: 22px;
  color: ${props => (props.isSelected ? FontColor.POINT : FontColor.POINT_BLUR)};
  cursor: pointer;
  white-space: nowrap;
`;
