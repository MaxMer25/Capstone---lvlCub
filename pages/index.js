import React, {useState, useEffect, useContext} from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import ChildIcon from "../components/childIcon";
import ParentIcon from "../components/ParentIcon";
import {UserContext} from "../components/UserContext";

export default function Login() {
  const {user} = useContext(UserContext);
  const [popup, setPopup] = useState(false);
  const [load, setLoad] = useState(false);
  const [fetchUser, setFetchUser] = useState([]);
  const [shouldReload, setShouldReload] = useState(true);
  const [userInfo] = useState({
    name: "",
    type: "Child",
    gold: 0,
    experience: 0,
  });

  useEffect(() => {
    const getUser = async () => {
      try {
        setLoad(!load);
        const response = await fetch("/api/user/");
        if (response.ok) {
          const data = await response.json();
          setFetchUser(data);
          setLoad(false);
        } else {
          throw new Error(
            `Fetch fehlgeschlagen mit Status: ${response.status}`
          );
        }
      } catch (error) {
        alert(error.message);
      }
      setShouldReload(false);
    };
    if (shouldReload) {
      getUser();
    }
  }, [shouldReload]);

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
      ...userInfo,
      name: event.target.name.value,
    });
    setPopup(!popup);
    setShouldReload(true);
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
        {user === "Parent" && (
          <button onClick={addChildren}>Add Children!</button>
        )}

        <StyledPopup popup={popup}>
          <form onSubmit={handleSubmit}>
            <h2>Name of the child:</h2>
            <label htmlFor="name"></label>
            <input id="name" name="name" type="text"></input>
            <button type="submit">Add</button>
          </form>
        </StyledPopup>
        <StyledProfileContainer>
          {fetchUser.map(u => {
            if (u.type === "Child") {
              return (
                <div key={u._id}>
                  <p>{u.name}</p>
                  <ChildIcon />
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
  padding-bottom: 1vh;
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
