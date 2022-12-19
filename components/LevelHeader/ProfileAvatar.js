import React from "react";
import styled from "styled-components";
import Image from "next/image";

const ProfileAvatar = () => {
  return (
    <StyledAvatar>
      <Image
        src="/examples/avatarExample.png"
        alt="picture of an Avatar"
        height={65}
        width={60}
      />
    </StyledAvatar>
  );
};

export default ProfileAvatar;

const StyledAvatar = styled.div`
  border: 2px solid black;
  height: 70px;
`;
