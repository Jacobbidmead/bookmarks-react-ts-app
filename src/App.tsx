import React, {FC, useState, useEffect} from "react";
import styled from "styled-components";
import {Button} from "./Components/Button.styled"
import AppPagination from "./Components/Pagination";

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
const [links, setLinks] = useState<Link[]>(  () => JSON.parse(localStorage.getItem("links") || "[]"))

// Sets initial state for the edit links functionality 
const [editLinks, setEditLinks] = useState(-1);
const [editUrl, setEditUrl] = useState("");
const [editText, setEditText] = useState("");


// Sets inital state, the amount of links per page
const [postsPerPage, setPostsPerPag] = useState(20)
  
 

  // Function to change state of links
  const addLink = (url:string, text:string) => {
    if (!url || !text) {
      console.log('Url and Text fields are required');
      return;
    }
    setLinks([...links, {url, text}])
  }




  // Function that changes the state of links from input value
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


  // Function to edit links
  const handleEdit = (index: any) => {
    setEditLinks(index);
    setEditUrl(links[index].url);
    setEditText(links[index].text)
  };
  

  // Function that saves the new state of links
  const saveEdit = (index: number) => {
    const newLinks = [...links];
    newLinks[index] = { url: editUrl, text: editText };
    setLinks(newLinks);
    setEditLinks(-1);
  };


    // Save the links array to local storage 
    useEffect(() => {
      localStorage.setItem("links", JSON.stringify(links));
    }, [links]);
  
 

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


    {/* saved bookmarks container */}
    {/* Map links on form submit, show new input to edit links when handleEdit is called, otherwise show saved link, remove & edit buttons*/}
      {links.map((link, index) => (
        <div key={index}>
          {editLinks === index ? (
            <>
              <Input
                  type="url"
                  name="url"
                  placeholder="Link"
                  value={editUrl}
                  onChange={(e) => setEditUrl(e.target.value)}
                />
                <Input
                  type="text"
                  name="text"
                  placeholder="Name"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <Button onClick={() => saveEdit(index)}>Save</Button>
              </>
            ) : (
            <>
              <a href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a>
              <button onClick={() => removeLink(index)}>Remove</button> 
              <button onClick={() => handleEdit(index)}>Edit</button>
            </>
          )}
        </div>
      ))}

    {/* saved bookmarks container end*/}


    {/* clear button */}
<div><Button onClick={clearLinks}>Clear all</Button></div>
<AppPagination/>
    {/* clear button end */}
  </>
  );
}







export default App;
