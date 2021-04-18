import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {spacing} from 'utilities/units';

export const Link = styled.a`
  margin-right: ${spacing.medium};
  margin-left: ${spacing.medium};
`;
export const Icon = styled(FontAwesomeIcon)`
  width: 2rem;
`;
