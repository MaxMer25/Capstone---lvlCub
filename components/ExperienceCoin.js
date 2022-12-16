import React from "react";
import Image from "next/image";
import styled from "styled-components";

export default function ExperienceCoin() {
  return (
    <StyledCubCoin
      src="/ExperienceCoin.png"
      alt="Experiencesymbol"
      width={46}
      height={46}
    />
  );
}

const StyledCubCoin = styled(Image)`
  display: inline;
  position: relative;
  top: 2vh;
  margin-left: 3vw;
`;
