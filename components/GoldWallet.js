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
          <div>
            {user.gold}
            <CubCoin className="cubImage" />
          </div>
        </StyledGoldWallet>
      </>
    )
  );
};

const StyledGoldWallet = styled.div`
  position: fixed;
  overflow: hidden;
  background-color: gold;
  left: 1vw;
  bottom: 15%;
  display: flex;
  align-items: baseline;
  border: 4px solid white;
  border-radius: 20px;
  width: 30%;
  height: 100px;
  padding-left: 3vw;
`;
