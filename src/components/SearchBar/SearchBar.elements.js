import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {gray} from 'utilities/colors';
import {spacing} from 'utilities/units';

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${gray.main};
  padding: ${spacing.small} ${spacing.medium};
  border-radius: 100rem;
`;
export const SearchIcon = styled(FontAwesomeIcon)`
  width: 1.5rem;
  margin-right: ${spacing.medium};
`;
export const SearchInput = styled.input`
  border: none;
  background-color: ${gray.main};
  &:active {
    border: none;
  }
`;
