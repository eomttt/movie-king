import React from 'react';
import * as Styles from './styles';

interface IProps {
  text: string;
  icon: string;
}

const Date: React.FunctionComponent<IProps> = ({ text, icon }) => (
  <Styles.Container>
    <Styles.Content>
      <img src={icon} alt="Select button" />
      <div>{text}</div>
    </Styles.Content>
  </Styles.Container>
);

export default Date;
