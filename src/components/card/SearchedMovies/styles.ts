import styled from '@emotion/styled';

interface ContentProps {
  index: number;
}

export const Container = styled.div``;

export const Content = styled.div<ContentProps>`
  margin-bottom: 15px;
  width: 32%;
  margin: 0 ${(props): string => (props.index % 3 === 1 ? '2%' : '0')};
  display: inline-block;
`;
