import React from 'react';
import {render} from '@testing-library/react';

import MasonryPage from './index';

describe('<Masonry /> Page', () => {
  test('Should rendered correctly', () => {
    expect(render(<MasonryPage />)).toBeTruthy();
  });
  test('Should render Navbar and Content page', () => {
    const {container, queryByTestId} = render(<MasonryPage />);
    expect(container).toBeTruthy();
    expect(container.children.length).toEqual(2);
    expect(queryByTestId('masonry-container').children.length).toBeTruthy();
  });
});
