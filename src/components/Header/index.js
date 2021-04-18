import React from 'react';
import {func} from 'prop-types';
import {faBell, faHome, faUserCircle} from '@fortawesome/free-solid-svg-icons';

import {Nav} from './Header.elements';
import {NavLink, SearchBar} from 'components';

const Header = ({setSearchKeyword}) => {
  return (
    <Nav>
      <SearchBar setSearchKeyword={setSearchKeyword} />
      <NavLink data-testid={'link-home'} icon={faHome} />
      <NavLink data-testid={'link-bell'} icon={faBell} />
      <NavLink data-testid={'link-profile'} icon={faUserCircle} />
    </Nav>
  );
};
Header.propTypes = {
  setSearchKeyword: func,
};
export default Header;
