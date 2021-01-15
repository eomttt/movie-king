import React from 'react';
import Bottom from 'components/navBar/Bottom';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';


describe('Not tablet', () => {
  it('Bottom Render correctly normal', ()=> {
    render(
      <Router>
      <Bottom />
      </Router>
    );
  });
});