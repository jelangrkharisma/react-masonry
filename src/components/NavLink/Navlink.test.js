import React from 'react';
import {render} from '@testing-library/react';

import Navlink from './index';
import {faBell} from '@fortawesome/free-solid-svg-icons';

describe('<Navlink /> Component', () => {
  test('Should render bell icon correctly', () => {
    const {queryByTestId} = render(<Navlink icon={faBell} />);
    expect(queryByTestId('svg-link-icon').getAttribute('data-icon')).toEqual(
        'bell',
    );
  });
});
