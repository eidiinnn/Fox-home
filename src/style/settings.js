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
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;

  font-family: "josefin";
  background-color: ${(props) => props.backgroundColor};
  color: white;

  width: 500px;
  max-height: 80%;
  padding: 1.25rem;
  backdrop-filter: blur(10px);
`;

export const ModalTitles = styled.h1`
  font-size: 0.93rem;
  font-weight: 700;
`;

export const ModalItem = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  justify-content: ${(props) => (props.row ? "space-between" : "left")};
  align-items: ${(props) => (props.row ? "center" : "left")};
  margin-bottom: ${(props) => (props.noBottomMargin ? "0" : "10px")};
  margin-top: ${(props) => (props.noTopMargin ? "0" : " 0.8rem")};
`;

export const CloseIcon = styled.div`
  font-size: 1.43rem;
  display: flex;
  align-items: center;
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
  font-weight: 700;

  padding: 0.21rem 0.8rem 0.31rem 0.8rem;
  margin: 0 !important;
  border-radius: 3px;
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
  border-radius: 3px;
  margin-bottom: 0.31rem;
  font-family: "roboto";
  font-weight: 400;
`;

export const BookmarkInputRemove = styled.div`
  font-size: 1.1rem;
  margin-left: 0.35rem;
`;

export const BookmarkAddInput = styled.button`
  width: min-content;
  padding: 0.21rem 1.4rem 0.21rem 1.4rem;
  margin: 0 !important;
  border-radius: 3px;
  border: 0;

  font-weight: 700;
  font-size: 0.8rem;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const CropImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const CropImageRangeContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  font-size: 1.3rem;
  color: white;
  margin-top: 0.4rem;

  align-items: center;
`;

export const CropImageRage = styled.input`
  width: 100%;
`;

export const CropImageButton = styled.button`
  width: min-content;
  padding: 0.21rem 1.4rem 0.21rem 1.4rem;
  margin-top: 0.2rem;
  border-radius: 3px;
  border: 0;

  font-weight: 700;
  font-size: 0.8rem;

  &:hover {
    filter: brightness(0.8);
  }
`;
