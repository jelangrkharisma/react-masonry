import styled from 'styled-components';
import {gray} from 'utilities/colors';

export const Placeholder = styled.div`
  max-width: 240px;
  width: 100%;
  border-radius: 12px;
  height: 480px;
  background-color: ${gray.main};
  display: flex;
  justify-content: center;
  align-items: center;
`;
