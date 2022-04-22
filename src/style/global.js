import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import robotoCondensed from "../fonts/RobotoCondensed-Bold.ttf";
import robotoRegular from "../fonts/Roboto-Regular.ttf";
import soraRegular from "../fonts/Sora-Regular.ttf";
import soraMedium from "../fonts/Sora-Medium.ttf";
import soraBold from "../fonts/Sora-Bold.ttf";

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

@font-face {
  font-family: "robotoCondensed";
  src: url(${robotoCondensed});
  font-weight: 700;
}

@font-face {
  font-family: "roboto";
  src: url(${robotoRegular});
  font-weight: 400;
}

@font-face {
    font-family: "sora";
    src: url(${soraRegular});
    font-weight: 400;
}

@font-face {
    font-family: "sora";
    src: url(${soraMedium});
    font-weight: 500;
}

@font-face {
    font-family: "sora";
    src: url(${soraBold});
    font-weight: 700;
}
`;

export const FullWideContainer = styled.div`
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
