import { createGlobalStyle } from "styled-components";
import { LightGray } from "./variables";

const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
    background-color: ${LightGray};
  }
`;

export default GlobalStyles;
