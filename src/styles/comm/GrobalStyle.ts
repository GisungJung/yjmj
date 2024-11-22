import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    margin : auto;
  }
  a {
    text-decoration : none;
    color : inherit;
  }
	body {
    font-family : apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell , 'Helvetica Neue', sans-serif;
    font-size : 14px;
    background-color : rgba(20,20,20,1);
    color : white;
    overflow-x : hidden;
    display: flex;
  }
`;

export default GlobalStyle;
