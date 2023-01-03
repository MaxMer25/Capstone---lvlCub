import React from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import ProfileAvatar from "./ProfileAvatar";
import LevelIndicator from "./LevelIndicator";

const LevelHeader = () => {
  return (
    <StyledLevel>
      <ProgressBar />
      <LevelIndicator />
      <ProfileAvatar />
    </StyledLevel>
  );
};

export default LevelHeader;

const StyledLevel = styled.div`
  display: flex;
  align-items: center;
  gap: 2%;
  top: 0;
  border: 4px solid tomato;
  border-radius: 20px;
  height: 10%;
  padding: 2vw;
  margin: 0.1rem 0.1rem 1rem 0.1rem;
`;
