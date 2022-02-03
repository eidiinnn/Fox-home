import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import backgroundImageBlur from "./images/backgroundImageBlur.jpg";

export const GlobalStyle = createGlobalStyle` 
body {
  margin: 0;
  padding: 10px;
  width: 100%;
  height: 100%;
  background: url(${backgroundImageBlur}) no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}`;
