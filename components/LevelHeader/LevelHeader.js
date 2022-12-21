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
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: center;
  gap: 2%;
  position: relative;
  top: 0;
  border: 4px solid red;
  border-radius: 20px;
  width: 100%;
  height: 10%;
  padding: 2vw;
`;
