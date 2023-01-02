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
  width: 4rem;
  height: 3rem;
  border: 2px solid black;
  border-radius: 50%;
  padding-right: 0.4rem;
`;
