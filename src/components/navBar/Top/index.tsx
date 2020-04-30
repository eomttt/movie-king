import { LOGO_ICON } from '@constants/common';
import React from 'react';
import * as Styles from './styles';

const Top = () => (
  <Styles.Container>
    <Styles.Content>
      <img src={LOGO_ICON} alt="Logo" />
    </Styles.Content>
  </Styles.Container>
);

export default Top;
