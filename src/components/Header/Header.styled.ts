import { styled } from "styled-components";

export const HeaderBox = styled.header`
  display: flex;
  padding-top: 20px;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
export const Wrapper = styled.div`
  display: flex;
  @media screen and (min-width: 768px) {
    gap: 41px;
  }
  @media screen and (min-width: 1280px) {
    gap: 40px;
  }
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 38px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    gap: 50px;
  }
  @media screen and (min-width: 1280px) {
    gap: 40px;
  }
`;
export const BoxForBalance = styled.div`
  display: flex;
  gap: 6px;
  width: 82px;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 87px;
    gap: 10px;
  }
`;
export const BalanceText = styled.span`
  color: ${(p) => p.theme.colors.greySecond};
  font-family: ${(p) => p.theme.fonts.mainM};
  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.normal};
  letter-spacing: 0.48px;
  width: 53px;
`;
export const BalancePoints = styled.span`
  color: ${(p) => p.theme.colors.black};
  font-family: Montserrat;
  font-size: ${(p) => p.theme.fontSizes.m};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  letter-spacing: 0.56px;
`;
export const BtnMenu = styled.button`
  width: 28px;
  height: 28px;
`;
export const SvgIcon = styled.svg`
  width: 28px;
  height: 28px;
  fill: ${(p) => p.theme.colors.grey};
`;
export const Box = styled.div`
  display: flex;
  gap: 35px;
`;
// export const TextBalance = styled.p`
//   color: ${(p) => p.theme.colors.grey};
//   font-size: ${(p) => p.theme.fontSizes.s};
//   font-weight: ${(p) => p.theme.fontWeights.normal};
//   letter-spacing: 0.48px;
//   width: 77px;
//   display: flex;
//   align-items: center;
//   gap: 6px;
// `;

export const BoxForBtnLogout = styled.div`
  display: flex;
  align-items: center;
`;
export const BtnLogoutIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: ${(p) => p.theme.colors.grey};
  padding-left: 15px;
  border-left: 1px solid ${(p) => p.theme.colors.grey};
`;
