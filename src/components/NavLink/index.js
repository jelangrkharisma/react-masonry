import React from 'react';
import {string} from 'prop-types';
import {object} from 'prop-types';
import {Link, Icon} from './Navlink.elements';
import {gray} from 'utilities/colors';

const NavLink = (props) => {
  const {alt, icon} = props;
  return (
    <Link {...props}>
      <Icon
        data-testid={'svg-link-icon'}
        alt={alt}
        icon={icon}
        color={gray.darker}
        size={'lg'}
      />
    </Link>
  );
};
NavLink.defaultProps = {
  alt: 'navigation link',
};
NavLink.propTypes = {
  icon: object.isRequired,
  alt: string,
};
export default NavLink;
