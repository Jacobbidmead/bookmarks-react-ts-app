import React, {FC, useState} from "react";
import styled from "styled-components";

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const App:FC = () => {
  return (
    <>
    {/* input container */}
    <div>
      <form>
        <Input></Input>
        <Input></Input>
      </form>
    </div>
    {/* input container */}
    {/* results container */}
    {/* results container */}
  </>
  );
}

export default App;
