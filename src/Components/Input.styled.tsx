import styled from "styled-components";

export const Input = styled.input`
  color: black;
  font-size: 25px;
  padding: 10px;
  margin: 40px;
  border-radius: 40px;
  border: 1px solid black;
  &:focus {
    outline: none;
    border-color: none;
  }
`;

export const Edit = styled.input`
  color: black;
  font-size: 12px;
  padding: 8px;
  margin: 8px;
  border-radius: 40px;
  border: 1px solid black;
  &:focus {
    outline: none;
    border-color: none;
  }
`;
