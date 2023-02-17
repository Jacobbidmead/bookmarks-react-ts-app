import styled from "styled-components";

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #74ebd5;
  background-image: linear-gradient(90deg, #74ebd5 0%, #9face6 100%);
  border-top: 2px black solid;
  border-bottom: 2px black solid;
  padding-top: 5px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
`;

export const TopBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export const LinkGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Align = styled.div`
  display: flex;
  justify-content: center;
`;
