import { HOME, MY_PAGE, SEARCH } from '@constants/navBar';
import React from 'react';
import * as Styles from './styles';

const Bottom = () => (
  <Styles.Container>
    <Styles.Content>
      <Styles.Item>
        <img src={HOME} alt="home" />
        <div>홈</div>
      </Styles.Item>
      <Styles.Item>
        <img src={SEARCH} alt="search" />
        <div>검색</div>
      </Styles.Item>
      <Styles.Item>
        <img src={MY_PAGE} alt="my page" />
        <div>마이페이지</div>
      </Styles.Item>
    </Styles.Content>
  </Styles.Container>
);

export default Bottom;
