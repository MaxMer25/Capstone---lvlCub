import React, {useState, useContext} from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import ChildIcon from "../components/ChildIcon";
import ParentIcon from "../components/ParentIcon";
import {UserContext} from "../components/UserContext";
import {LoadingAnimation} from "../components/LoadingAnimation";
import {Button} from "@mui/material";
import Popup from "../components/Popup";
import {useApi} from "../hooks/useApi";

export default function Login() {
  const {user, setUser} = useContext(UserContext);
  const [popup, setPopup] = useState(false);
  const [fetchedUser, load] = useApi("/api/user/");
  const [userInfo] = useState({
    name: "",
    type: "Child",
    gold: 0,
    experience: 0,
    level: 1,
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
    event.preventDefault();
    submitUser({
      ...userInfo,
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
        <StyledParentContainer>
          {fetchedUser.map(u => {
            if (u.type === "Parent") {
              return (
                <div
                  className="parentContainer"
                  key={u._id}
                  onClick={() => {
                    setUser({type: "Parent", id: u._id});
                    alert(`Hello ${u.name}`);
                  }}
                >
                  <p>{u.name}</p>
                  <ParentIcon />
                </div>
              );
            }
          })}
        </StyledParentContainer>
        <br></br>
        {user.type === "Parent" && (
          <Button variant="contained" onClick={addChildren}>
            Add Children!
          </Button>
        )}
        {load && <LoadingAnimation />}
        {popup && (
          <Popup>
            <form onSubmit={handleSubmit}>
              <h2>Name of the child:</h2>
              <label htmlFor="name"></label>
              <input
                className="textInput"
                id="name"
                name="name"
                type="text"
              ></input>
              <Button className="btn" variant="contained" type="submit">
                Add
              </Button>
            </form>
          </Popup>
        )}

        <StyledProfileContainer>
          {fetchedUser.map(u => {
            if (u.type === "Child") {
              return (
                <div
                  className="childIcon"
                  key={u._id}
                  onClick={() => {
                    setUser({
                      type: "Child",
                      id: u._id,
                      name: u.name,
                      gold: u.gold,
                      level: u.level,
                    });
                    alert(`Hello ${u.name}`);
                  }}
                >
                  <p>{u.name}</p>
                  <ChildIcon width="80" height="100" className="test" />
                </div>
              );
            }
          })}
        </StyledProfileContainer>
      </StyleWrapper>
    </>
  );
}

const StyleWrapper = styled.div`
  text-align: center;
`;

const StyledProfileContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin: auto;
  margin-bottom: 14vh;
  border: 4px solid white;
  border-radius: 20px;
  width: 90vw;
  height: fit-content;

  .childIcon {
    margin-bottom: 0;
  }
`;

const StyledParentContainer = styled.div`
  display: flex;
  .parentContainer {
    width: 100%;
  }
`;
