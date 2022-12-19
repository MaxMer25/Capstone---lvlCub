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
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  border: 4px solid red;
  width: 100%;
  height: 10%;
  padding: 1vw;
`;
