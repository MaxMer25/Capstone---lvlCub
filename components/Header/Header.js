import styled from "styled-components";
import Image from "next/image";

export default function Header() {
  return (
    <StyledHeader>
      <Image
        src="/testlogo2.png"
        alt="picture of something"
        width={150}
        height={150}
      />
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  margin-top: 5%;
  text-align: center;
`;
