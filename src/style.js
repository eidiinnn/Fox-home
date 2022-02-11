import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import defaultImage from "./images/image.jpg";

import josefinRegular from "./fonts/JosefinSans-Regular.ttf";
import josefinBold from "./fonts/JosefinSans-Bold.ttf";

const UserBackgroundColor = localStorage.getItem("backgroundColor");
const userImage = localStorage.getItem("image");

const backgroundColor = UserBackgroundColor ? UserBackgroundColor : "#110c19";
const image = userImage ? userImage : defaultImage;

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
    font-family: "josefin";
    src: url(${josefinRegular});
    font-weight: 400;
}

@font-face {
    font-family: "josefin";
    src: url(${josefinBold});
    font-weight: 700;
}`;

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${image}) no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  z-index: 1;
  filter: blur(5px) brightness(0.9);
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
  width: 820px;
  height: 55px;
  color: white;
  background-color: ${backgroundColor};
  margin-bottom: 20px;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 55px 2fr;
  align-content: center;

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
  background-color: ${backgroundColor};
  grid-row: 2;
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 20px;
  height: 360px;
  width: 820px;

  @media screen and (max-width: 900px) {
    max-width: 80%;
    padding-bottom: 25px;
    flex-direction: column;
    justify-content: start;
  }
`;

export const CentralDivImage = styled.img`
  max-width: 340px;
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
  width: 500px;
  padding: 30px;
  background-color: #ffff;
  display: flex;
  flex-direction: column;
`;
