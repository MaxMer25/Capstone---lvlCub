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
        style={{marginBottom: "-0.2 rem"}}
      />
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem 0;
`;
