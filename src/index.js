import React from 'react';
import ReactDOM from 'react-dom';

import {GlobalStyle} from 'utilities/GlobalStyles';
import {Masonry} from './pages';

ReactDOM.render(
    <React.StrictMode>
      <GlobalStyle />
      <Masonry />
    </React.StrictMode>,
    document.getElementById('root'),
);
