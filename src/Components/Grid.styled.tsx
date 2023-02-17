import styled from "styled-components";

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #74ebd5;
  background-image: linear-gradient(90deg, #74ebd5 0%, #9face6 100%);
  border-top: 1px black solid;
  border-bottom: 1px black solid;
  padding-top: 5px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #ffdead;
`;

export const FooterButton = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
  background-color: #ffdead;
`;

export const TopBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #ffdead;
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

export const Blurb = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  padding: 30px;
  font-size: 25px;
  width: 70%;
  margin-left: auto;
`;
