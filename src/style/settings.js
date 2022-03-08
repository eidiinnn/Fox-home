import styled from "styled-components";

export const OpenSettingsModalIcon = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  margin-top: 1.25rem;
  margin-left: 1.25rem;

  color: white;
  font-size: 1.25rem;
`;

export const ModalDisplay = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background-color: #101010b5;

  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;

  font-family: "josefin";
  background-color: ${(props) => props.backgroundColor};
  color: white;

  width: 500px;
  padding: 1.25rem;
  backdrop-filter: blur(10px);
`;

export const ModalTitles = styled.h1`
  font-size: 0.93rem;
  font-weight: 400;
`;

export const ModalItem = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  justify-content: ${(props) => (props.row ? "space-between" : "left")};
  align-items: ${(props) => (props.row ? "center" : "left")};
  margin-bottom: ${(props) => (props.noBottomMargin ? "0px" : "10px")};
  margin-top: 0.313rem;
`;

export const CloseIcon = styled.div`
  font-size: 1.43rem;
`;

export const SupportMeLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.62rem;

  font-size: 0.87rem;
  text-align: center;
  font-weight: 700;
`;

export const SupportMeIcon = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.18rem;
  font-size: 1rem;
`;

export const SaveButton = styled.button`
  font-family: "josefin";
  font-weight: 700;

  padding: 0.31rem 0.62rem 0.31rem 0.62rem;
  margin: 0 !important;
  border-radius: 0.31rem;
  border: 0;

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

export const BookmarkInputs = styled.input`
  width: 300px;
  height: 20px;
  border: 0;
  border-radius: 5px;
  margin-bottom: 0.31rem;
`;

export const BookmarkInputRemove = styled.div`
  font-size: 1rem;
  margin-left: 0.25rem;
`;

export const BookmarkAddInput = styled.button`
  width: min-content;
  height: 20px;
  padding: 0.31rem 0.93rem 0.31rem 0.93rem;
  margin: 0 !important;
  border-radius: 5px;
  border: 0;

  font-family: "josefin";
  font-weight: 700;

  &:hover {
    filter: brightness(0.8);
  }
`;
