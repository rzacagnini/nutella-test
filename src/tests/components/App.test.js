import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { App } from '../../components/App';

describe('App tests!', () => {
  it('renders', () => {
    const { asFragment } = render(<App message="Testing!" />);
    expect(asFragment()).toMatchSnapshot();
  });
  afterAll(cleanup);
});
