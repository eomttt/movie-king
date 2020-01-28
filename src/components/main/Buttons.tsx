import React from 'react';

import styled from 'styled-components';

import SelectButton from '../button/Select';
import { PLACE, PLACE_ICON, DATE, DATE_ICON } from '../../constants/button';

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 28px;
`;

const LeftContent = styled.div`
  min-width: calc(50% - 3.5px);
  margin: auto 3.5px auto 0;
`;

const RightContent = styled.div`
  min-width: calc(50% - 3.5px);
  margin: auto 0 auto 3.5px;
`;

const Buttons = () => (
  <Container>
    <LeftContent>
      <SelectButton text={PLACE} icon={PLACE_ICON} />
    </LeftContent>
    <RightContent>
      <SelectButton text={DATE.TODAY} icon={DATE_ICON} />
    </RightContent>
  </Container>
);

export default Buttons;
