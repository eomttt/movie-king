import React from 'react';

import styled from 'styled-components';

import { boxShadow } from '../../styles';
import { SEARCH_ICON, PLACEHOLDER } from '../../constants/search';

const Container = styled.div`
  width: 100%;
  height: 51px;
  border-radius: 10px;
  overflow: hidden;
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
  & input {
    height: 100%;
    margin: auto auto auto 3.5px;
    border: none;
    padding: 0;
    font-size: 16px;
    font-weight: 600;
  }
`;

const Search = () => (
  <Container>
    <Content>
      <img src={SEARCH_ICON} alt="Search" />
      <input placeholder={PLACEHOLDER} />
    </Content>
  </Container>
);

export default Search;
