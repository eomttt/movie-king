import { TITLE_1, TITLE_2 } from '@constants/main';
import React from 'react';
import * as Styles from './styles';

const Title = () => (
  <Styles.Container>
    <div>{`99 ${TITLE_1}`}</div>
    <div>{TITLE_2}</div>
  </Styles.Container>
);

export default Title;
