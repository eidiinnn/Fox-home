import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import josefinRegular from "../fonts/JosefinSans-Regular.ttf";
import josefinBold from "../fonts/JosefinSans-Bold.ttf";
import robotoCondensed from "../fonts/RobotoCondensed-Bold.ttf";

export const GlobalStyle = createGlobalStyle` 
body {
  margin: 0;
  padding: 0; 
  background : black;
  overflow: hidden;
}

a:link {
  text-decoration: none;
  color: inherit;
}
a:visited {
  text-decoration: none;
  color: inherit;
}
a:hover {
  text-decoration: none;
  color: inherit;
}
a:active {
  text-decoration: none;
  color: inherit;
}

.MuiSwitch-track{
  background-color: #ffffff !important;
}

input[type="file"]:button{
  font-family: "josefin";
  border-radius: 5px;
  border: none;
}

@font-face {
  font-family: "robotoCondensed";
  src: url(${robotoCondensed});
  font-weight: 700;
}

@font-face {
    font-family: "josefin";
    src: url(${josefinRegular});
    font-weight: 400;
}

@font-face {
    font-family: "josefin";
    src: url(${josefinBold});
    font-weight: 700;
}
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 2;
  top: 0px;
`;
