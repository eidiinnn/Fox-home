import styled from "styled-components";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1;

  background: url(${(props) => props.image}) no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  filter: blur(${(props) => props.blurLevel + "px"}) brightness(0.8);
`;

export const CentralContainerImage = styled.img`
  max-width: 300px;
  height: 100%;
  object-fit: cover;
  border-radius: ${(props) =>
    `${props.borderRadius}px 0px 0px ${props.borderRadius}px`};

  @media screen and (max-width: 900px) {
    max-width: 100%;
    height: 100px;
  }
`;
