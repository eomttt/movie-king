import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 28px;
`;

export const LeftContent = styled.div`
  min-width: calc(50% - 3.5px);
  margin: auto 3.5px auto 0;
`;

export const RightContent = styled.div`
  min-width: calc(50% - 3.5px);
  margin: auto 0 auto 3.5px;
`;
