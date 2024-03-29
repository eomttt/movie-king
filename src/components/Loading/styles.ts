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
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.div``;
