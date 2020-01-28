import React from 'react';

import styled from 'styled-components';

import { TITLE_1, TITLE_2 } from '../../constants/main';

const Container = styled.div`
  margin-top: 40px;
  margin-bottom: 15px;
  font-size: 28px;
  font-weight: 600;
`;

const Title = () => (
  <Container>
    <div>{`99 ${TITLE_1}`}</div>
    <div>{TITLE_2}</div>
  </Container>
);

export default Title;
