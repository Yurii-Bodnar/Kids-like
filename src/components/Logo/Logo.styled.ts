import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 5px;
  cursor: pointer;
`;
export const Title = styled.h2`
  font-size: ${(p) => p.theme.fontSizes.l};
  color: ${(p) => p.theme.colors.black};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  letter-spacing: 1.28px;
  cursor: pointer;
`;
export const SvgLogo = styled.svg`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
