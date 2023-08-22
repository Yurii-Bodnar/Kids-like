import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    box-sizing: border-box;
    font-family: ${(p) => p.theme.fonts.main};
    padding: 0 20px;
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
  }
  ul {
    list-style: none;
  }
  button{
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
`;

export default GlobalStyle;
