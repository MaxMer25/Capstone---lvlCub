import React, {useContext} from "react";
import styled from "styled-components";
import {UserContext} from "../../components/UserContext";

const LevelIndicator = () => {
  const {user} = useContext(UserContext);

  return <StyledLevel>{user.level}</StyledLevel>;
};

export default LevelIndicator;

const StyledLevel = styled.div`
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border: 2px solid black;
  border-radius: 50%;
`;
