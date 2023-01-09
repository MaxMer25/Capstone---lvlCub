import React, {useContext} from "react";
import {UserContext} from "../components/UserContext";
import styled from "styled-components";
import CubCoin from "./CubCoin";

export const GoldWallet = () => {
  const {user} = useContext(UserContext);
  return (
    user.type === "Child" && (
      <>
        <StyledGoldWallet>
          {user.gold}
          <CubCoin className="cubImage" />
        </StyledGoldWallet>
      </>
    )
  );
};

const StyledGoldWallet = styled.div`
  position: fixed;
  font-size: 2rem;
  overflow: hidden;
  background-color: gold;
  left: 1rem;
  bottom: 15%;
  display: flex;
  justify-content: center;
  align-items: baseline;
  border: 4px solid white;
  border-radius: 20px;
  width: 10rem;
  height: 6rem;
  -webkit-filter: drop-shadow(5px 5px 3px rgba(0, 0, 0, 0.7));
  filter: drop-shadow(5px 5px 3px rgba(0, 0, 0, 0.7));

  :hover {
    opacity: 0.5;
    z-index: 0;
  }
`;
