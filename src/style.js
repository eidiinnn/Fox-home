import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import josefinRegular from "./fonts/JosefinSans-Regular.ttf";
import josefinBold from "./fonts/JosefinSans-Bold.ttf";

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
    font-family: "josefin";
    src: url(${josefinRegular});
    font-weight: 400;
}

@font-face {
    font-family: "josefin";
    src: url(${josefinBold});
    font-weight: 700;
}`;

export const BackgroundDiv = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${(props) => props.image}) no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  z-index: 1;
  filter: blur(3px) brightness(0.9);
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

export const SearchBarContainer = styled.div`
  width: 800px;
  height: 53px;
  color: white;
  background-color: ${(props) => props.backgroundColor};
  margin-bottom: 20px;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 55px 2fr;
  align-content: center;
  box-shadow: 5px 5px 14px 4px rgba(0, 0, 0, 0.19);

  &:hover {
    outline: solid 3px;
  }

  @media screen and (max-width: 900px) {
    max-width: 80%;
  }
`;

export const SearchBarGoogleIcon = styled.div`
  margin-left: 10px;
  font-size: 30px;
  display: flex;
  align-content: center;
  border-right: 4px solid #ffffff;
`;

export const SearchBarForm = styled.form`
  width: 100%;
  display: flex;
  align-content: center;
`;

export const SearchBarInput = styled.input`
  width: 95%;
  max-height: 100%;
  padding-left: 10px;
  background-color: #050e1300;
  border: 0px;
  font-weight: 400;
  font-size: 20px;
  color: white;

  &:focus {
    outline: none;
  }
`;

export const CentralDivContainer = styled.div`
  background-color: ${(props) => props.backgroundColor};
  grid-row: 2;
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 40px 20px 20px 40px;
  height: 350px;
  width: 800px;
  box-shadow: 5px 5px 14px 4px rgba(0, 0, 0, 0.19);

  @media screen and (max-width: 900px) {
    max-width: 80%;
    padding-bottom: 25px;
    border-radius: 40px 40px 20px 20px;
    flex-direction: column;
    justify-content: start;
  }
`;

export const CentralDivImage = styled.img`
  max-width: 300px;
  height: 100%;
  border-radius: 20px 0px 0px 20px;
  object-fit: cover;

  @media screen and (max-width: 900px) {
    max-width: 100%;
    height: 100px;
    border-radius: 20px 20px 0px 0px;
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
  font-family: "josefin";
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
  border-radius: 20px;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  display: flex;
  flex-direction: column;
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

export const BookmarkInputs = styled.input`
  height: 20px;
  border: 0px;
  border-radius: 5px;
  margin-bottom: 5px;
`;
