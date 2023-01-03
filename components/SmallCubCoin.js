import React from "react";
import Image from "next/image";
import styled from "styled-components";

export default function SmallCubCoin() {
  return (
    <StyledCubCoin src="/cubCoin.png" alt="Coinsymbol" width={35} height={35} />
  );
}

const StyledCubCoin = styled(Image)`
  display: inline;
  top: 2vh;
  margin-left: 0.5rem;
`;
