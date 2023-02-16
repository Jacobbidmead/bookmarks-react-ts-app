import React, {FC, useState} from "react";
import styled from "styled-components";
import {Button} from "./Components/Button.styled"

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

  // Create a function that changes the state of links

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = event.currentTarget.url.value
    const text = event.currentTarget.text.value
    addLink(url, text)
    event.currentTarget.reset()
  }



  return (
    <>
    {/* input container */}
    <div>
      <form onSubmit={handleSubmit}>
        <Input type="text" name="url" placeholder="Link"></Input>
        <Input type="text" name="url" placeholder="Name" ></Input>
        <Button type="submit">Click</Button>
      </form>
    </div>
    {/* input container */}
    {/* results container */}
    <div></div>
    {/* results container */}
  </>
  );
}

export default App;
