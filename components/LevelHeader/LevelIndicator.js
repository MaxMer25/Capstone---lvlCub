import React from "react";
import styled from "styled-components";

const LevelIndicator = () => {
  return <StyledLevel>10</StyledLevel>;
};

export default LevelIndicator;

const StyledLevel = styled.div`
  font-size: 1.5em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  width: 50px;
  border: 2px solid black;
  border-radius: 50%;
`;
