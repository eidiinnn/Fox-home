import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 350px;
  width: 800px;
  justify-content: center;
  align-self: center;

  background-color: ${(props) => props.backgroundColor};
  backdrop-filter: blur(10px);

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
  color: white;
  font-weight: 700;
  text-align: center;
  padding-top: 2.3rem;

  @media screen and (max-width: 900px) {
    font-size: ${(props) => (props.AMPM ? "10.9vw" : "15vw")};
  }
`;

export const BookmarkUl = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;

  padding: 0;
  margin: 0;
`;

export const BookmarkLi = styled.li`
  font-size: 3.2rem;
  color: white;
  margin: 0.6rem;
`;

export const IconCreated = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 38px;
  height: 38px;

  font-family: "robotoCondensed";
  color: white;
  font-weight: 700;
  font-size: 2.5rem;

  padding: 0.16rem;
  border-radius: 100px;
  border: solid;
  border-width: 4px;
`;
