import styled from "styled-components";
import Link from "next/link";
import {useRouter} from "next/router";

export default function Navigation() {
  const router = useRouter();
  return (
    <Footer>
      <StyledNavigation role="navigation">
        <ul>
          <StyledLink href={"/"}>
            <svg
              role="img"
              width="62"
              height="62"
              viewBox="0 0 62 62"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Loginbutton</title>
              <path
                d="M31 62V55.1111H55.1111V6.88889H31V0H55.1111C57.0056 0 58.6279 0.673963 59.9781 2.02189C61.326 3.37211 62 4.99444 62 6.88889V55.1111C62 57.0056 61.326 58.6279 59.9781 59.9781C58.6279 61.326 57.0056 62 55.1111 62H31ZM24.1111 48.2222L19.375 43.2278L28.1583 34.4444H0V27.5556H28.1583L19.375 18.7722L24.1111 13.7778L41.3333 31L24.1111 48.2222Z"
                // currentPage Indicator
                fill={router.pathname === "/" ? "#12263A" : "#FBF5F3"}
              />
            </svg>
          </StyledLink>

          <StyledLink href={"/home/tasks"}>
            <svg
              role="img"
              width="62"
              height="62"
              viewBox="0 0 62 62"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Homebutton</title>
              <path
                d="M8.45455 56.0952V26.5714H0L31 0L62 26.5714H53.5455V29.5238H47.9091V22.069L31 7.60238L14.0909 22.069V50.1905H19.7273V56.0952H8.45455ZM37.2 62L25.3636 49.6L29.3091 45.4667L37.2 53.7333L53.8273 36.3143L57.7727 40.4476L37.2 62Z"
                // currentPage Indicator
                fill={router.pathname === "/home/tasks" ? "#12263A" : "#FBF5F3"}
              />
            </svg>
          </StyledLink>

          <StyledLink href={"/rewards/"}>
            <svg
              role="img"
              width="62"
              height="62"
              viewBox="0 0 62 62"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Rewardbutton</title>
              <path
                d="M18.5911 62C16.8869 62 15.4286 61.3934 14.216 60.1803C13.0014 58.9651 12.3941 57.505 12.3941 55.8C12.3941 54.095 13.0014 52.6349 14.216 51.4197C15.4286 50.2066 16.8869 49.6 18.5911 49.6C20.2953 49.6 21.7537 50.2066 22.9662 51.4197C24.1808 52.6349 24.7881 54.095 24.7881 55.8C24.7881 57.505 24.1808 58.9651 22.9662 60.1803C21.7537 61.3934 20.2953 62 18.5911 62ZM49.5763 62C47.8721 62 46.4137 61.3934 45.2012 60.1803C43.9866 58.9651 43.3793 57.505 43.3793 55.8C43.3793 54.095 43.9866 52.6349 45.2012 51.4197C46.4137 50.2066 47.8721 49.6 49.5763 49.6C51.2805 49.6 52.7399 50.2066 53.9545 51.4197C55.1671 52.6349 55.7733 54.095 55.7733 55.8C55.7733 57.505 55.1671 58.9651 53.9545 60.1803C52.7399 61.3934 51.2805 62 49.5763 62ZM31.9147 22.63C31.3467 22.0617 31.0626 21.3383 31.0626 20.46C31.0626 19.5817 31.3467 18.8583 31.9147 18.29L34.6259 15.5H24.7881C23.9102 15.5 23.1749 15.2034 22.582 14.6103C21.9871 14.0151 21.6896 13.2783 21.6896 12.4C21.6896 11.5217 21.9871 10.7849 22.582 10.1897C23.1749 9.59657 23.9102 9.3 24.7881 9.3H34.6259L31.8373 6.51C31.2176 5.89 30.9211 5.16667 30.948 4.34C30.9728 3.51333 31.295 2.79 31.9147 2.17C32.5344 1.60167 33.2574 1.30407 34.0837 1.2772C34.91 1.2524 35.633 1.55 36.2527 2.17L44.3088 10.23C44.6187 10.54 44.8387 10.8758 44.9688 11.2375C45.0969 11.5992 45.1609 11.9867 45.1609 12.4C45.1609 12.8133 45.0969 13.2008 44.9688 13.5625C44.8387 13.9242 44.6187 14.26 44.3088 14.57L36.2527 22.63C35.6846 23.1983 34.975 23.4949 34.124 23.5197C33.2709 23.5466 32.5344 23.25 31.9147 22.63ZM18.5911 46.5C16.2156 46.5 14.4215 45.4791 13.209 43.4372C11.9944 41.3974 11.9809 39.37 13.1687 37.355L17.3517 29.76L6.19704 6.2H3.09852C2.2206 6.2 1.48522 5.9024 0.892373 5.3072C0.297458 4.71407 0 3.97833 0 3.1C0 2.22167 0.297458 1.4849 0.892373 0.8897C1.48522 0.296566 2.2206 0 3.09852 0H8.13361C8.70167 0 9.24391 0.155 9.76033 0.465C10.2768 0.775 10.6641 1.21417 10.9223 1.7825L23.3938 27.9H45.0834L56.1606 7.8275C56.4189 7.31083 56.7938 6.9099 57.2854 6.6247C57.775 6.34157 58.3038 6.2 58.8718 6.2C60.0596 6.2 60.951 6.71667 61.5459 7.75C62.1387 8.78333 62.1511 9.81667 61.583 10.85L50.5058 30.845C49.9378 31.8783 49.189 32.6792 48.2594 33.2475C47.3299 33.8158 46.2712 34.1 45.0834 34.1H21.9995L18.5911 40.3H52.6748C53.5527 40.3 54.2881 40.5966 54.881 41.1897C55.4759 41.7849 55.7733 42.5217 55.7733 43.4C55.7733 44.2783 55.4759 45.0141 54.881 45.6072C54.2881 46.2024 53.5527 46.5 52.6748 46.5H18.5911Z"
                // currentPage Indicator
                fill={router.pathname === "/rewards" ? "#12263A" : "#FBF5F3"}
              />
            </svg>
          </StyledLink>
        </ul>
      </StyledNavigation>
    </Footer>
  );
}

const StyledNavigation = styled.nav`
  display: block;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  min-height: 10%;
  max-height: 100px;
  background-color: #ff6542;

  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
  }
`;

const StyledLink = styled(Link)`
  margin-right: 10vw;

  :active {
    -webkit-animation: rotate-center 0.3s ease-in-out both;
    animation: rotate-center 0.3s ease-in-out both;

    @-webkit-keyframes rotate-center {
      0% {
        -webkit-transform: rotate(0);
        transform: rotate(0);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    @keyframes rotate-center {
      0% {
        -webkit-transform: rotate(0);
        transform: rotate(0);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  }
`;

const Footer = styled.footer`
  overflow: hidden;
`;
