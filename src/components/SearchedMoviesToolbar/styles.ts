import { FontColor } from 'styles/color';
import styled from '@emotion/styled';

interface MenuProps {
  isSelected: boolean;
  isRight?: boolean;
}

export const Container = styled.div`
  margin-bottom: 20px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
`;

export const Menu = styled.div<MenuProps>`
  font-size: 22px;
  color: ${(props) => (props.isSelected
    ? FontColor.POINT
    : FontColor.POINT_BLUR)};
  margin-left: ${(props) => (props.isRight ? '10px' : '0px')}
`;
