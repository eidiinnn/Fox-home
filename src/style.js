import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import josefinRegular from "./fonts/JosefinSans-Regular.ttf";
import josefinBold from "./fonts/JosefinSans-Bold.ttf";
import robotoCondensed from "./fonts/RobotoCondensed-Bold.ttf";

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

export const BackgroundDiv = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${(props) => props.image}) no-repeat;
  filter: blur(5px) brightness(0.8);
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  z-index: 1;
`;

export const MainGrind = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  z-index: 2;
  top: 0px;
`;

export const CentralDivContainer = styled.div`
  background-color: ${(props) => props.backgroundColor};
  grid-row: 2;
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 350px;
  width: 800px;
  //backdrop-filter: blur(10px);

  @media screen and (max-width: 900px) {
    max-width: 80%;
    padding-bottom: 25px;
    flex-direction: column;
    justify-content: start;
  }
`;

export const CentralDivImage = styled.img`
  max-width: 300px;
  height: 100%;
  object-fit: cover;

  @media screen and (max-width: 900px) {
    max-width: 100%;
    height: 100px;
  }
`;

export const CentralDivClockAndFavorites = styled.div`
  width: 580px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 100%;
  }
`;

export const CentralDivClock = styled.div`
  font-family: "robotoCondensed";
  font-weight: 700;
  font-size: ${(props) => props.fontSize};
  text-align: center;
  color: white;
  padding-top: 35px;

  @media screen and (max-width: 900px) {
    font-size: ${(props) => props.mediaFontSize};
  }
`;

export const CentralDivBookmarkUl = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CentralDivBookmarkLi = styled.li`
  font-size: 50px;
  color: white;
  margin: 10px;
`;

export const NotListedIcon = styled.div`
  width: 38px;
  height: 38px;
  color: white;
  font-size: "josefin";
  font-weight: 700;
  font-size: 40px;
  padding: 2px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid;
  border-width: 4px;
`;

export const SettingsIconContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  margin-left: 20px;
  margin-top: 20px;
  color: white;
  font-size: 20px;
`;

export const NotSaveIconContainer = styled.div`
  font-size: 23px;
`;

export const SettingsModal = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
  background-color: #101010b5;
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

export const SettingsModalContainer = styled.div`
  font-family: "josefin";
  width: 500px;
  padding: 20px;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px);
`;

export const SettingsModalItems = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.vertical ? "row" : "column")};
  justify-content: ${(props) => (props.vertical ? "space-between" : "left")};
  align-items: ${(props) => (props.vertical ? "center" : "left")};
  margin-top: 5px;
  margin-bottom: ${(props) => (props.noBottomMargin ? "0px" : "10px")};
`;

export const SettingsModalTitles = styled.h1`
  font-size: 15px;
  font-weight: 400;
`;

export const SupportMeLink = styled.a`
  font-size: 14px;
  text-align: center;
  font-weight: 700;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SupportMeIcon = styled.div`
  font-size: 16px;
  margin-left: 3px;
  display: flex;
  align-items: center;
`;

export const SaveButton = styled.button`
  font-family: "josefin";
  font-weight: 700;
  padding: 5px 10px 5px 10px;
  margin: 0px !important;
  border-radius: 5px;
  border: 0px;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const BookmarkInputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;
export const BookmarkInputsCloseIcon = styled.div`
  font-size: 17px;
  margin-left: 4px;
`;

export const BookmarkInputs = styled.input`
  width: 300px;
  height: 20px;
  border: 0px;
  border-radius: 5px;
  margin-bottom: 5px;
`;

export const BookmarkAddInput = styled.button`
  width: min-content;
  height: 20px;
  font-family: "josefin";
  font-weight: 700;
  padding: 5px 15px 5px 15px;
  margin: 0px !important;
  border-radius: 5px;
  border: 0px;

  &:hover {
    filter: brightness(0.8);
  }
`;
