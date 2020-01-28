import React from 'react';

import Title from '../components/main/Title';
import Buttons from '../components/main/Buttons';

import Search from '../components/search';
import Layout from '../components/Layout';

const Main = () => (
  <Layout>
    <Title />
    <Search />
    <Buttons />
  </Layout>
);

export default Main;
