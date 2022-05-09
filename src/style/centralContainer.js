import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 350px;
  width: 800px;
  justify-content: center;
  align-self: center;

  color: ${(props) => (!props.textIconColor ? "white" : props.textIconColor)};
  background-color: ${(props) => props.backgroundColor};
  backdrop-filter: blur(
    ${(props) =>
      !props.backdropFilterBlur ? "10px" : props.backdropFilterBlur + "px"}
  );
  border-radius: ${(props) => props.borderRadius + "px"};

  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: start;

    max-width: 80%;
    height: max-content;
    padding-bottom: 1.5rem;
  }
`;

export const ClockAndBookmarkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 580px;

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 100%;
  }
`;

export const ClockContainer = styled.div`
  font-family: "robotoCondensed";
  font-size: ${(props) => (props.AMPM ? "6rem" : "8rem")};
  font-weight: 700;
  text-align: center;
  padding-top: 2.3rem;

  @media screen and (max-width: 900px) {
    font-size: ${(props) => (props.AMPM ? "10.9vw" : "15vw")};
  }
`;

export const BookmarkLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;

  padding: 0;
  margin: 0;
`;

export const BookmarkLink = styled.a`
  font-size: 3.2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.6rem;
  transition: 500ms;
  box-sizing: border-box;

  &:hover {
    transform: scale(1.3);
  }
`;

export const IconCreated = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  width: 3.15rem;
  height: 3.15rem;

  font-family: "robotoCondensed";
  text-align: center;
  color: white;
  font-weight: 700;
  font-size: 2.5rem;
  text-decoration: none;

  border-radius: 50%;
  border: solid 5px;
`;
