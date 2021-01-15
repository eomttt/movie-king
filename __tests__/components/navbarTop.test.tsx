import { render } from '@testing-library/react';
import Top from 'components/navBar/Top';

describe('Navbar top test', () => {
  it('Render correctly normal', () => {
    const top = render(
      <Top />,
    );
    expect(top.container).toMatchSnapshot();
  });
});
