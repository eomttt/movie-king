import React from 'react';

import styled from 'styled-components';

import { boxShadow } from '@styles/common';

interface IProps {
  text: string;
  icon: string;
}

const Container = styled.div`
  height: 51px;
  border-radius: 10px;
  box-shadow: ${boxShadow};
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  & img {
    width: 20px;
    height: 20px;
    margin: auto 3.5px auto 14px;
  }
  & div {
    margin: auto auto auto 3.5px;
    font-size: 14px;
    font-weight: bold;
  }
`;

const Date: React.FunctionComponent<IProps> = ({ text, icon }) => (
  <Container>
    <Content>
      <img src={icon} alt="Select button" />
      <div>{text}</div>
    </Content>
  </Container>
);

export default Date;
