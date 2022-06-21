import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  background-color: #219ebc;
  color: #023047;
  font-size: ${theme.default.fontSize.medium};
}
`;
