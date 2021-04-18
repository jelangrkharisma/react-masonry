import styled from 'styled-components';
import {spacing} from 'utilities/units';

export const PageContainer = styled.div`
  column-count: 6;
  column-gap: ${spacing.medium};
  max-width: 1600px;
  margin: 0 auto;
  padding-right: ${spacing.medium};
  padding-left: ${spacing.medium};
  padding-top: ${spacing.small};

  @media (max-width: 479px) {
    column-count: 2;
  }
  @media (min-width: 480px) {
    column-count: 2;
  }
  @media (min-width: 720px) {
    column-count: 3;
  }
  @media (min-width: 960px) {
    column-count: 4;
  }
  @media (min-width: 1200px) {
    column-count: 5;
  }
  @media (min-width: 1440px) {
    column-count: 6;
  }
`;
