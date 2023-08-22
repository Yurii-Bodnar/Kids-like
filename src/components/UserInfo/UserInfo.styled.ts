import { styled } from "styled-components";

export const UserName = styled.span`
  color: ${(p) => p.theme.colors.white};
  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  letter-spacing: 0.48px;
  padding-right: 15px;
  @media screen and (min-width: 768px) {
    color: ${(p) => p.theme.colors.grey};
  }
`;
