import React, {useContext} from "react";
import styled from "styled-components";
import Image from "next/image";
import {UserContext} from "../../components/UserContext";

const ProfileAvatar = () => {
  const {user} = useContext(UserContext);

  return (
    <StyledAvatar>
      <Image
        src={
          user.level > 10
            ? "/examples/avatarExample.png"
            : "/examples/avatarExample2.png"
        }
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
