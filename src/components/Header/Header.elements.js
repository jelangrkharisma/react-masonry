import styled from 'styled-components';
import {gray} from 'utilities/colors';
import {spacing} from 'utilities/units';

export const Nav = styled.nav`
  position: sticky;
  padding: ${spacing.medium} ${spacing.large};
  border-bottom: 4px solid ${gray.main};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: ${gray.lighter};
  top: 0;

  @media (max-width: 720px) {
    justify-content: space-around;
  }
`;
