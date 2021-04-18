import styled from 'styled-components';
import {spacing} from 'utilities/units';

export const ImageBlocks = styled.div`
  display: inline-block;
  margin-top: ${spacing.medium};
  margin-bottom: ${spacing.medium};
  margin: ${spacing.small} 0;
  width: 100%;
`;
export const Image = styled.img`
  max-width: 240px;
  width: 100%;
  border-radius: 12px;
`;
