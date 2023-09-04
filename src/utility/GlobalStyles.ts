import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    box-sizing: border-box;
    font-family: ${(p) => p.theme.fonts.main};
    padding: 0 20px;
    position: relative;
    @media screen and (min-width: 768px){
     padding: 0 94px;
    }
    @media screen and (min-width: 1280px){
      padding: 0 50px;
    }
  }
  ul, li, h1, h2, h3, h4, p, button, img  {
     padding: 0px;
     margin: 0px;
  cursor: default;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    transition: cubic-bezier(0.25, 0.46, 0.45, 0.94) 250ms;
    &:hover {
    transform: translate(-1%, -1%);
    
  }
  }
  ul {
    list-style: none;
  }
  button{
    cursor: pointer;
    border: none;
    background-color: transparent;
    transition: cubic-bezier(0.25, 0.46, 0.45, 0.94) 250ms;

    &:hover {
    transform: translate(-1%, -1%);
    box-shadow: rgba(0, 0, 0, 0.25) 4px 4px 6px,
      rgba(255, 255, 255, 0.3) -4px -4px 6px;
  }
  }
`;

export default GlobalStyle;
