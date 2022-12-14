import React from "react";
import styled from "styled-components";

export default function Popup({children}) {
  return <StyledPopup>{children}</StyledPopup>;
}

const StyledPopup = styled.div`
  position: absolute;
  margin-top: 1vh;
  font-size: 1.1em;
  width: 100%;
  height: fit-content;
  text-align: center;
  font-weight: bold;
  border: 4px solid white;
  border-radius: 20px;
  padding: 5%;
  background-color: lightgreen;
  transition: 1s;
  box-shadow: 8px 8px 15px 5px rgba(0, 0, 0, 0.5);
  .homeButton {
    margin-right: 10%;
    background-color: tomato;
  }

  .btn {
    margin-left: 1vh;
    margin-top: 1vh;
  }

  .textInput {
    width: 100%;
    font-size: 1.5em;
  }
`;
