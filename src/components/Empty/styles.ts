import styled from '@emotion/styled';
import { FontColor } from 'styles/color';

interface ContainerProps {
  height: number;
}

export const Container = styled.div<ContainerProps>`
  color: ${FontColor.POINT};
  width: 100%;
  height: ${props => props.height}px;
  text-align: center;
  display: flex;
`;

export const Content = styled.div`
  margin: auto;
`;
