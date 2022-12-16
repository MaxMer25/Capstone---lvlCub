import React from "react";
import Image from "next/image";
import styled from "styled-components";

export default function CubCoin() {
  return (
    <StyledCubCoin src="/cubCoin.png" alt="Coinsymbol" width={50} height={50} />
  );
}

const StyledCubCoin = styled(Image)`
  display: inline;
  position: relative;
  top: 2vh;
  margin-left: 3vw;
`;
