import SelectButton from '@components/button/Select';
import { DATE, DATE_ICON, PLACE, PLACE_ICON } from '@constants/button';
import React from 'react';
import * as Styles from './styles';

const Buttons = () => (
  <Styles.Container>
    <Styles.LeftContent>
      <SelectButton text={PLACE} icon={PLACE_ICON} />
    </Styles.LeftContent>
    <Styles.RightContent>
      <SelectButton text={DATE.TODAY} icon={DATE_ICON} />
    </Styles.RightContent>
  </Styles.Container>
);

export default Buttons;
