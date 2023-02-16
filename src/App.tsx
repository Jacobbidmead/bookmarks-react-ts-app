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

interface Link {
  url: string;
  text:string;
}

const App:FC = () => {
// Sets inital state of links to empty array
  const [links, setLinks] = useState<Link[]>([])

  // Function to change state of links
  const addLink = (url:string, text:string) => {
    setLinks([...links, {url, text}])
  }
  


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
