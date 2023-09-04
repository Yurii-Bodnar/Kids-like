import React from "react";
import {
  useIsDesktop,
  useIsMobile,
  useIsTablet,
  useIsTabletOrDesktop,
} from "../../hooks/useMediaQuery";
import {
  Box,
  BoxUserInfo,
  BtnLogout,
  BtnLogoutIcon,
  IconBtn,
  Link,
  LinkBorder,
  LinkFirst,
  LinkForUnregisteredUser,
  LinkForUnregisteredUserContact,
  LinkLast,
  Nav,
  NavForUnregisteredUser,
} from "./Navigation.styled";
import btnClose from "../../images/sprite.svg";
import btnLogout from "../../images/sprite.svg";
import { PropsForNavigation } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { selectToken } from "../../redux/auth/authSelectors";
import UserInfo from "../UserInfo/UserInfo";

const Navigation: React.FC<PropsForNavigation> = ({
  setIsModalOpen,
  isModalOpen,
}) => {
  const isMobile = useIsMobile();
  const isDesktop = useIsDesktop();
  const isTablet = useIsTablet();
  const isTabletOrDesk = useIsTabletOrDesktop();
  const isAuth = useAppSelector(selectToken);
  console.log(isAuth);
  const dispatch = useAppDispatch();
  const handleClose = (): void => {
    if (isModalOpen) {
      setIsModalOpen(false);
    }
  };
  return (
    <>
      {isTabletOrDesk && !isAuth && (
        <NavForUnregisteredUser>
          <LinkForUnregisteredUser to={"/auth"}>
            Sign in
          </LinkForUnregisteredUser>
          <LinkForUnregisteredUserContact to={"/contacts"}>
            Contacts
          </LinkForUnregisteredUserContact>
        </NavForUnregisteredUser>
      )}
      {isDesktop && isAuth && (
        <Nav>
          <LinkFirst to={"/"}>Main</LinkFirst>
          <LinkBorder to={"/planning"}>Planning</LinkBorder>
          <LinkBorder to={"/awards"}>Awards</LinkBorder>
          <Link to={"/contacts"}>Contacts</Link>
        </Nav>
      )}
      {isMobile && !isAuth && (
        <Nav>
          <Box>
            <button onClick={handleClose}>
              <IconBtn>
                <use href={btnClose + "#icon-close"}></use>
              </IconBtn>
            </button>
          </Box>
          <LinkFirst to={"/auth"}>Sign in</LinkFirst>
          <Link to={"/contacts"}>Contacts</Link>
        </Nav>
      )}
      {isMobile && isAuth && (
        <Nav>
          <Box>
            <BoxUserInfo>
              <UserInfo />
              <BtnLogout type="button" onClick={() =>{}}>
                <BtnLogoutIcon>
                  <use href={btnLogout + "#icon-logout"}></use>
                </BtnLogoutIcon>
              </BtnLogout>
            </BoxUserInfo>
            <button onClick={handleClose}>
              <IconBtn>
                <use href={btnClose + "#icon-close"}></use>
              </IconBtn>
            </button>
          </Box>
          <LinkFirst to={"/"}>Main</LinkFirst>
          <Link to={"/planning"}>Planning</Link>
          <Link to={"/awards"}>Awards</Link>
          <LinkLast to={"/contacts"}>Contacts</LinkLast>
        </Nav>
      )}
      {isTablet && isAuth && (
        <Nav>
          <Box>
            <button onClick={handleClose}>
              <IconBtn>
                <use href={btnClose + "#icon-close"}></use>
              </IconBtn>
            </button>
          </Box>
          <LinkFirst to={"/"}>Main</LinkFirst>
          <Link to={"/planning"}>Planning</Link>
          <Link to={"/awards"}>Awards</Link>
          <LinkLast to={"/contacts"}>Contacts</LinkLast>
        </Nav>
      )}
    </>
  );
};

export default Navigation;
