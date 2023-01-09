import React from "react";
import Image from "next/image";
import styled from "styled-components";

export default function TinyCubCoin() {
  return (
    <StyledCubCoin src="/cubCoin.png" alt="Coinsymbol" width={25} height={25} />
  );
}

const StyledCubCoin = styled(Image)`
  display: inline;
  top: 2vh;
  margin-left: 0.5rem;
  position: relative;
  top: 0.3rem;
`;
