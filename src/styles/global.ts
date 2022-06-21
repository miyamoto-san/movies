import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  background-color: ${theme.default.color.primary};
  color: ${theme.default.color.fontColor};
  font-size: ${theme.default.fontSize.medium};
}
`;
