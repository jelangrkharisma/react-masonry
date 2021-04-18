import React from 'react';
import {render} from '@testing-library/react';

import Header from './index';

describe('<Header /> Component', () => {
  test('Should render the Header', () => {
    const header = render(<Header />);
    expect(header).toBeTruthy();
  });

  test('Should have all correct links / components', () => {
    const {queryByTestId} = render(<Header />);
    expect(queryByTestId('search-bar')).toBeTruthy();
    expect(queryByTestId('link-home')).toBeTruthy();
    expect(queryByTestId('link-bell')).toBeTruthy();
    expect(queryByTestId('link-profile')).toBeTruthy();
  });
});
