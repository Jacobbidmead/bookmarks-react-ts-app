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
    if (!url || !text) {
      console.log('Url and Text fields are required');
      return;
    }
    
    setLinks([...links, {url, text}])

// sets the state back to original state - needs to be fixed


   
  }

  // Create a function that changes the state of links

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget;
    const url = (form.elements.namedItem("url") as HTMLInputElement).value;
    const text = (form.elements.namedItem("text") as HTMLInputElement).value;
    addLink(url, text)
    event.currentTarget.reset();

  
  }

  // Create a function to remove link

  const removeLink = (index: number) => {
    const newLinks = [...links];
    newLinks.splice(index, 1);
    setLinks(newLinks);
    
  };

  // Function to clear all links

  const clearLinks = () => {
    setLinks([]);
  };



  return (
    <>
    {/* input container */}
    <div>
      <form onSubmit={handleSubmit}>
        <Input type="url" name="url" placeholder="Link"></Input>
        <Input type="text" name="text" placeholder="Name"/>
        <Button type="submit">Add bookmark</Button>
      </form>
      
     
    </div>
    {/* input container end*/}
    {/* results container */}
    {/* Map links on form submit*/}

    
{links.map((link, index) => (  <div key={index}><a href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a><button onClick={() => removeLink(index)}>Remove</button></div> ))}

    {/* results container end*/}
    {/* clear button */}

    <div><Button onClick={clearLinks}>Clear all</Button></div>
    {/* clear button end */}
  </>
  );
}

export default App;
