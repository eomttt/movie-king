import { render } from '@testing-library/react';
import Bottom from 'components/navBar/Bottom';

describe('Not tablet', () => {
  it('Bottom Render correctly normal', ()=> {
    const bottom = render(
      <Bottom />,
    );
    expect(bottom.container).toMatchSnapshot();
  });
});