import { styled } from "styled-components";
import earphonesForMob from "../../images/earphones-for-mobile.png";
import forTabletSignImgFirst from "../../images/For-Tablet-Sign-in-1.png";
import forTabletSignImgSecond from "../../images/For-Tablet-Sign-in-2.png";
import forTabletSignImgThird from "../../images/For-Tablet-Sign-in-3.png";
import robotImg from "../../images/robot-for-sign-in.png";
import earphonesForDesk from "../../images/earphones.png";
import forDeskSignIn from "../../images/for-sign-in.png";
import forDeskSignInSecond from "../../images/for-sign-in-second.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 58px;
  padding-bottom: 282px;
  &::after {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;

    z-index: -1;
    width: 100%;
    background: url(${earphonesForMob}) no-repeat;
    background-position-y: bottom;
    background-position-x: center;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-top: 72px;
    padding-bottom: 280px;
    background: url(${forTabletSignImgSecond}) no-repeat;
    background-position-y: bottom;
    background-position-x: center;
    &::after {
      content: " ";
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;

      z-index: -1;
      width: 100%;
      background: url(${forTabletSignImgFirst}) no-repeat;
      background-position-y: bottom;
      background-position-x: left;
    }
    &::before {
      content: " ";
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;

      z-index: -1;
      width: 100%;
      background: url(${forTabletSignImgThird}) no-repeat;
      background-position-y: bottom;
      background-position-x: right;
    }
  }
  @media screen and (min-width: 1280px) {
    position: relative;
    justify-content: end;
    align-items: end;
    padding-bottom: 41px;
    padding-top: 72px;
    background: url(${forDeskSignIn}) no-repeat;
    background-position-y: 20px;
    background-position-x: -11px;
    &::after {
      content: " ";
      display: block;
      position: absolute;
      top: 455px;
      left: 195px;
      width: 359px;
      height: 290px;
      z-index: 3;
      background: url(${forDeskSignInSecond}) no-repeat;
    }
  }
`;
export const Title = styled.h1`
  color: ${(p) => p.theme.colors.black};
  text-align: center;
  font-family: ${(p) => p.theme.fonts.mainSemiBold};
  font-size: ${(p) => p.theme.fontSizes.xl};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  line-height: normal;

  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.xxl};
  }
`;
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 23px;
  @media screen and (min-width: 768px) {
    padding: 40px;
    width: 320px;
    border-radius: 6px;
    background: #fff;
    box-shadow: 4px 6px 15px 0px rgba(0, 0, 0, 0.1);
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 273px;
    &::after {
      content: " ";
      display: block;
      position: absolute;
      top: 334px;
      bottom: 0;
      left: -11px;
      z-index: 1;
      width: 276px;
      height: 219px;
      background: url(${robotImg}) no-repeat;
    }
    &::before {
      content: " ";
      display: block;
      position: absolute;
      top: 181px;
      bottom: 0;
      left: 206px;
      z-index: 1;
      width: 280px;
      height: 264px;
      background: url(${earphonesForDesk}) no-repeat;
    }
  }
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Span = styled.span`
  color: ${(p) => p.theme.colors.grey};
  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.regular};
  line-height: normal;
  letter-spacing: 0.48px;
`;
export const Input = styled.input`
  padding: 12px 20px 12px 10px;
  border: none;
  outline: none;
  background: ${(p) => p.theme.colors.greyThird};
  box-shadow: 0px 1px 1px 0px ${(p) => p.theme.colors.inputBg};

  color: ${(p) => p.theme.colors.greySecond};
  font-size: ${(p) => p.theme.fontSizes.m};
  font-weight: ${(p) => p.theme.fontWeights.regular};
  line-height: normal;
  letter-spacing: 0.56px;
  &::placeholder {
    color: ${(p) => p.theme.colors.greySecond};
  }
`;
export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;
export const Btn = styled.button`
  background-color: #ffbc33;
  padding: 15px 45px;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.02em;
  line-height: 1.1;
  padding: 15px 45px;
  text-align: center;
  width: 100%;
`;
