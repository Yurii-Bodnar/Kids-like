import React, { useState, useEffect } from "react";
import Logo from "../Logo/Logo";
import burgerMenu from "../../images/sprite.svg";
import {
  SvgIcon,
  HeaderBox,
  Box,
  Wrapper,
  Container,
  BoxForBalance,
  BalanceText,
  BalancePoints,
  BtnLogoutIcon,
  BoxForBtnLogout,
  BtnMenu,
} from "./Header.styled";
import {
  useIsDesktop,
  useIsMobile,
  useIsTablet,
  useIsTabletOrDesktop,
} from "../../hooks/useMediaQuery";
import Navigation from "../Navigation/Navigation";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { selectBalance, selectToken } from "../../redux/auth/authSelectors";
import UserInfo from "../UserInfo/UserInfo";
import btnLogout from "../../images/sprite.svg";
import { logoutUser } from "../../redux/auth/authSlice";

const Header: React.FC = () => {
  const isTabletOrDesk = useIsTabletOrDesktop();
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();
  const isMobile = useIsMobile();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isAuth = useAppSelector(selectToken)!;
  const balance = useAppSelector(selectBalance);

  const dispatch = useAppDispatch();

  const handleModal = (): void => {
    isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.background = "rgba(0, 0, 0, 0.20)";
    } else {
      document.body.style.background = "transparent";
    }
  }, [isModalOpen]);
  return (
    <>
      {isMobile && !isAuth && (
        <HeaderBox>
          <Logo />
          <button onClick={handleModal}>
            <SvgIcon>
              <use href={burgerMenu + "#icon-burger-menu"}></use>
            </SvgIcon>
          </button>
        </HeaderBox>
      )}
      {isMobile && isAuth && (
        <HeaderBox>
          <Logo />
          <Box>
            <BoxForBalance>
              <BalanceText>Balance of points:</BalanceText>
              <BalancePoints>{balance}</BalancePoints>
            </BoxForBalance>
            <button onClick={handleModal}>
              <SvgIcon>
                <use href={burgerMenu + "#icon-burger-menu"}></use>
              </SvgIcon>
            </button>
          </Box>
        </HeaderBox>
      )}
      {(isMobile || isTablet) && isModalOpen && (
        <Navigation isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}
      {isDesktop && isAuth && (
        <HeaderBox>
          <Container>
            <Logo />
            <BoxForBalance>
              <BalanceText>Balance of points:</BalanceText>
              <BalancePoints>{balance}</BalancePoints>
            </BoxForBalance>
          </Container>
          <Wrapper>
            <Navigation
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
            <BoxForBtnLogout>
              <UserInfo />

              <button type="button" onClick={() => dispatch(logoutUser())}>
                <BtnLogoutIcon>
                  <use href={btnLogout + "#icon-logout"}></use>
                </BtnLogoutIcon>
              </button>
            </BoxForBtnLogout>
          </Wrapper>
        </HeaderBox>
      )}
      {isTabletOrDesk && !isAuth && (
        <HeaderBox>
          <Container>
            <Logo />
          </Container>
          <Wrapper>
            <Navigation
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          </Wrapper>
        </HeaderBox>
      )}
      {isTablet && isAuth && (
        <HeaderBox>
          <Container>
            <Logo />
            <BoxForBalance>
              <BalanceText>Balance of points:</BalanceText>
              <BalancePoints>{balance}</BalancePoints>
            </BoxForBalance>
          </Container>
          <Wrapper>
            <BtnMenu onClick={handleModal}>
              <SvgIcon>
                <use href={burgerMenu + "#icon-burger-menu"}></use>
              </SvgIcon>
            </BtnMenu>
            <BoxForBtnLogout>
              <UserInfo />
              <button type="button" onClick={() => dispatch(logoutUser())}>
                <BtnLogoutIcon>
                  <use href={btnLogout + "#icon-logout"}></use>
                </BtnLogoutIcon>
              </button>
            </BoxForBtnLogout>
          </Wrapper>
        </HeaderBox>
      )}
    </>
  );
};

export default Header;
