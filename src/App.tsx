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
    console.log('working')
    event.preventDefault()
    const form = event.currentTarget;
    const url = (form.elements.namedItem("url") as HTMLInputElement).value;
    const text = (form.elements.namedItem("text") as HTMLInputElement).value;
    addLink(url, text)
    console.log(url, text)
  }

  // Create a function to remove bookmark

  const removeLink = (index: number) => {
    const newLinks = [...links];
    newLinks.splice(index, 1);
    setLinks(newLinks);
  };



  return (
    <>
    {/* input container */}
    <div>
      <form onSubmit={handleSubmit}>
        <Input type="url" name="url" placeholder="Link"/>
        <Input type="text" name="text" placeholder="Name"/>
        <Button type="submit">Add bookmark</Button>
      </form>
    </div>
    {/* input container */}
    {/* results container */}
    {/* Map links onclick */}
{links.map((link, index) => (  <div key={index} className="test"><a href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a></div> ))}
   
    {/* results container */}
  </>
  );
}

export default App;
