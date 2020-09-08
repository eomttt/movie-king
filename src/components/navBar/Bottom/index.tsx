import { HOME, MY_PAGE, SEARCH } from 'constants/navBar';
import React from 'react';
import { Link } from 'react-router-dom';
import * as Styles from './styles';

const Bottom = () => (
  <Styles.Container>
    <Styles.Content>
      <Link to="/">
        <img src={HOME} alt="home" />
        <div>홈</div>
      </Link>
      <Link to="/search">
        <img src={SEARCH} alt="search" />
        <div>검색</div>
      </Link>
      <Link to="/myPage">
        <img src={MY_PAGE} alt="myPage" />
        <div>마이페이지</div>
      </Link>
    </Styles.Content>
  </Styles.Container>
);

export default Bottom;
