import styled from "styled-components";

export const Button = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 40px;
  cursor: pointer;
  background-image: linear-gradient(
    30deg,
    rgb(1, 114, 175) 25%,
    rgb(1, 114, 175) 0%,
    rgb(116, 254, 189)
  );
  border: 1px solid black;
`;

export const Small = styled.button`
  width: 150px;
  height: 32px;
  border-radius: 40px;
  cursor: pointer;
  background-image: linear-gradient(
    30deg,
    rgb(1, 114, 175) 25%,
    rgb(1, 114, 175) 0%,
    rgb(116, 254, 189)
  );
  border: 1px solid black;
`;

export const Editbutton = styled.button`
  width: 33px;
  height: 33px;
  border-radius: 50%;
  cursor: pointer;
  background-color: black;
  color: white;
  font-size: 10px;
  border: 1px solid black;
  margin-left: 10px;
  border: 1px solid rgb(116, 254, 189);
  padding-top: 2px;
`;

export const Deletebutton = styled.button`
  width: 33px;
  height: 33px;
  border-radius: 50%;
  cursor: pointer;
  background-color: black;
  color: white;
  font-size: 7px;
  border: 1px solid black;
  margin-left: 100px;
  border: 1px solid rgb(116, 254, 189);
  margin-top: 0px;
`;
