import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const Nav = styled.nav`
  background: ${(p) => p.theme.colors.orange};
  box-shadow: -15px 0px 20px 0px rgba(0, 0, 0, 0.25);
  width: 274px;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  z-index: 10;

  @media screen and (min-width: 1280px) {
    background: transparent;
    box-shadow: 0 0 0 0;
    position: static;
    flex-direction: row;
    width: auto;
    height: auto;
    align-items: center;
  }
`;
export const NavForUnregisteredUser = styled.nav`
  background: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Box = styled.div`
  padding: 20px 20px;
  display: flex;
  justify-content: end;
  gap: 51px;
`;

export const IconBtn = styled.svg`
  width: 14px;
  height: 14px;
  fill: ${(p) => p.theme.colors.white};
`;
export const LinkFirst = styled(NavLink)`
  color: ${(p) => p.theme.colors.white};
  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.normal};
  letter-spacing: 0.48px;
  padding: 14px 0 14px 30px;
  border-top: 1px solid ${(p) => p.theme.colors.white};
  &.active {
    color: ${(p) => p.theme.colors.black};
  }
  @media screen and (min-width: 1280px) {
    color: ${(p) => p.theme.colors.grey};
    padding: 0 15px 0 15px;
    border-right: 1px solid ${(p) => p.theme.colors.grey};
    &.active {
      color: ${(p) => p.theme.colors.black};
    }
  }
`;
export const LinkForUnregisteredUser = styled(NavLink)`
  color: ${(p) => p.theme.colors.grey};
  padding: 0 15px 0 0;
  border-right: 1px solid ${(p) => p.theme.colors.grey};
  &.active {
    color: ${(p) => p.theme.colors.black};
  }
`;
export const LinkForUnregisteredUserContact = styled(NavLink)`
  color: ${(p) => p.theme.colors.grey};
  padding: 0 0 0 15px;

  &.active {
    color: ${(p) => p.theme.colors.black};
  }
`;
export const LinkBorder = styled(NavLink)`
  color: ${(p) => p.theme.colors.white};
  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.normal};
  letter-spacing: 0.48px;
  padding: 14px 0 14px 30px;
  border-top: 1px solid ${(p) => p.theme.colors.white};
  &.active {
    color: ${(p) => p.theme.colors.black};
  }
  @media screen and (min-width: 768px) {
    color: ${(p) => p.theme.colors.grey};
    padding: 0 15px 0 15px;
    border-right: 1px solid ${(p) => p.theme.colors.grey};
    &.active {
      color: ${(p) => p.theme.colors.black};
    }
  }
`;

export const Link = styled(NavLink)`
  color: ${(p) => p.theme.colors.white};
  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.normal};
  letter-spacing: 0.48px;
  padding: 14px 0 14px 30px;
  border-top: 1px solid ${(p) => p.theme.colors.white};
  &.active {
    color: ${(p) => p.theme.colors.black};
  }
  @media screen and (min-width: 1280px) {
    color: ${(p) => p.theme.colors.grey};
    padding: 0 0 0 15px;
    &.active {
      color: ${(p) => p.theme.colors.black};
    }
  }
`;
export const LinkLast = styled(NavLink)`
  color: ${(p) => p.theme.colors.white};
  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.normal};
  letter-spacing: 0.48px;
  padding: 14px 0 14px 30px;
  border-top: 1px solid ${(p) => p.theme.colors.white};
  border-bottom: 1px solid ${(p) => p.theme.colors.white};

  &.active {
    color: ${(p) => p.theme.colors.black};
  }
  @media screen and (min-width: 1280px) {
    color: ${(p) => p.theme.colors.grey};
    padding: 0 0 0 15px;
    &.active {
      color: ${(p) => p.theme.colors.black};
    }
  }
`;
export const BoxUserInfo = styled.div`
  display: flex;
  align-items: center;
`;
export const BtnLogout = styled.button`
  width: 18px;
  height: 18px;
  padding-left: 15px;
  border-left: 1px solid ${(p) => p.theme.colors.white};
`;

export const BtnLogoutIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: ${(p) => p.theme.colors.white};
`;
