import React, {useState} from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import ChildIcon from "../components/childIcon";
import ParentIcon from "../components/ParentIcon";

export default function Login() {
  const [popup, setPopup] = useState(false);
  const [user] = useState({
    name: "",
    type: "Children",
    gold: 0,
    experience: 0,
  });

  const submitUser = async x => {
    await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify(x),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  async function handleSubmit(event) {
    console.log(event.target.name.value);
    event.preventDefault();
    submitUser({
      ...user,
      name: event.target.name.value,
    });
    setPopup(!popup);
  }

  function addChildren() {
    setPopup(!popup);
  }
  return (
    <>
      <Header />
      <StyleWrapper>
        <h1>Welcome to lvlCub! Please Choose:</h1>
        <ParentIcon />
        <br></br>
        <button onClick={addChildren}>Add Children!</button>
        <StyledPopup popup={popup}>
          <form onSubmit={handleSubmit}>
            <h2>Name of the child:</h2>
            <label htmlFor="name"></label>
            <input id="name" name="name" type="text"></input>
            <button type="submit">Add</button>
          </form>
        </StyledPopup>
        <StyledProfileContainer>
          <ChildIcon />
          <ChildIcon />
          <ChildIcon />
        </StyledProfileContainer>
      </StyleWrapper>
    </>
  );
}

const StyleWrapper = styled.div`
  text-align: center;
`;

const StyledProfileContainer = styled.div`
  margin: auto;
  margin-bottom: 14vh;
  border: 4px solid white;
  border-radius: 20px;
  width: 90vw;
`;

const StyledPopup = styled.div`
  position: relative;
  margin: auto;
  font-size: 1.1em;
  width: 85%;
  padding: 5%;
  font-weight: bold;
  border: 4px solid white;
  border-radius: 20px;
  background-color: lightgreen;
  transition: 1s;
  box-shadow: 8px 8px 15px 5px rgba(0, 0, 0, 0.5);
  ${props => (props.popup ? "display: block;" : "display: none;")}
`;
