import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import backgroundImageBlur from "./images/backgroundImageBlur.jpg";

import josefinRegular from "./fonts/JosefinSans-Regular.ttf";
import josefinBold from "./fonts/JosefinSans-Bold.ttf";

export const GlobalStyle = createGlobalStyle` 
body {
  margin: 0;
  padding: 0;
  background: url(${backgroundImageBlur}) no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
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
}`;

export const MainGrind = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  margin: 0 auto;
  width: max-content;
  height: 100vh;
`;

export const CentralDivContainer = styled.div`
  background-color: #0c0c0c;
  grid-row: 2;
  align-self: center;
  display: flex;
  flex-direction: row;
  border-radius: 40px;
  height: 400px;
  width: auto;
`;

export const CentralDivImage = styled.img`
  max-width: 363px;
  height: 100%;
  border-radius: 40px 0px 0px 40px;
`;

export const CentralDivClockAndFavorites = styled.div`
  width: 560px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CentralDivClock = styled.div`
  font-family: "josefin";
  font-weight: 700;
  font-size: 150px;
  color: white;
`;
