import Head from "next/head";
import {useState, useEffect, useContext} from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import {UserContext} from "../../components/UserContext";
import Header from "../../components/Header/Header";
import {LoadingAnimation} from "../../components/LoadingAnimation";
import {GoldWallet} from "../../components/GoldWallet";
import SmallCubCoin from "../../components/SmallCubCoin";
import TinyCubCoin from "../../components/TinyCubCoin";
import {Button} from "@mui/material";
import {Backdrop} from "@mui/material";

export default function Reward() {
  const {user} = useContext(UserContext);
  const [rewards, setRewards] = useState([]);
  const [shouldReload, setShouldReload] = useState(true);
  const [load, setLoad] = useState(false);
  const [backdrop, setBackdrop] = useState(false);
  const [imageSource, setImageSource] = useState(rewards.image);
  const [title, setTitle] = useState("");
  const [cost, setCost] = useState("");
  const [sumCost, setSumCost] = useState("");

  useEffect(() => {
    const getRewards = async () => {
      try {
        setLoad(!load);
        const response = await fetch("/api/rewards/");
        if (response.ok) {
          const data = await response.json();
          setRewards(data);
          setLoad(false);
        } else {
          throw new Error(
            `Fetch fehlgeschlagen mit Status: ${response.status}`
          );
        }
      } catch (error) {
        alert(error.message);
      }
      setShouldReload(false);
    };
    if (shouldReload) {
      getRewards();
    }
  }, [shouldReload]);

  function handleToggle() {
    setBackdrop(!backdrop);
  }

  function test(event) {
    setSumCost(event.target.value * cost);
  }

  return (
    <>
      <Head>
        <title>Rewards</title>
      </Head>
      <Header />

      {load && <LoadingAnimation />}
      <StyledLayout>
        <StyledList>
          {rewards.map(reward => {
            return (
              <StyledListElement key={reward._id}>
                <p>{reward.title}</p>
                <Image
                  id={reward._id}
                  width={125}
                  height={100}
                  src={reward.image}
                  alt="picture of a reward"
                ></Image>
                <FlexContainer>
                  {JSON.stringify(reward.cost)}
                  <SmallCubCoin />
                  <Button
                    onClick={() => {
                      handleToggle();
                      setImageSource(reward.image);
                      setTitle(reward.title);
                      setCost(reward.cost);
                    }}
                  >
                    🛒
                  </Button>
                  <Backdrop
                    sx={{
                      color: "fff",
                      zIndex: theme => theme.zIndex.drawer + 1,
                    }}
                    open={backdrop ? true : false}
                  >
                    <FlexBackdrop>
                      <GoldBar>
                        <p>{user.gold}</p>
                        <SmallCubCoin />
                      </GoldBar>
                      <StyledBuyingBackdrop>
                        <Border>
                          <h2>How many do you want to purchase?</h2>
                          <Image
                            id={reward._id}
                            width={125}
                            height={100}
                            src={imageSource}
                            alt="picture of a reward"
                          ></Image>
                          <p>
                            {title}({cost}
                            <TinyCubCoin />)
                          </p>
                        </Border>
                        <form>
                          <label htmlFor="amount">Amount:</label>
                          <input
                            onInput={test}
                            type="number"
                            name="amount"
                            min="0"
                            step="1"
                          ></input>
                          <h3>Cost</h3>
                          <p>{sumCost}</p>
                        </form>

                        <Button
                          className="back"
                          variant="contained"
                          onClick={handleToggle}
                        >
                          CANCEL
                        </Button>
                        <Button className="buy" variant="contained">
                          Buy
                        </Button>
                      </StyledBuyingBackdrop>
                    </FlexBackdrop>
                  </Backdrop>
                </FlexContainer>
              </StyledListElement>
            );
          })}
        </StyledList>
        {user.type === "Parent" && (
          <Link href="/rewards/addReward">
            <StyledSvg
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_i_177_160)">
                <g clip-path="url(#clip0_177_160)">
                  <path
                    d="M36 1.13997e-06C55.8828 1.76958e-06 72 16.1172 72 36C72 55.8828 55.8828 72 36 72C16.1172 72 -1.76958e-06 55.8828 -1.13997e-06 36C-5.10365e-07 16.1172 16.1172 5.10365e-07 36 1.13997e-06ZM36 19.71C35.3495 19.71 34.7255 19.9682 34.2652 20.4278C33.8049 20.8875 33.5458 21.5111 33.5448 22.1616L33.5448 33.408L22.302 33.408C21.7136 33.4085 21.145 33.6204 20.6996 34.0049C20.2543 34.3895 19.9619 34.9212 19.8756 35.5032L19.8468 35.8632C19.8468 37.2204 20.9448 38.3184 22.302 38.3184L33.5448 38.3184L33.5448 49.5612C33.5448 50.796 34.452 51.8148 35.6364 51.9912L36 52.0164C36.6512 52.0164 37.2757 51.7577 37.7361 51.2973C38.1965 50.8369 38.4552 50.2124 38.4552 49.5612L38.4516 38.3184L49.698 38.3184C50.2853 38.3181 50.8531 38.1073 51.2983 37.7242C51.7435 37.3411 52.0366 36.8111 52.1244 36.2304L52.1532 35.8632C52.1523 35.2127 51.8932 34.5891 51.4328 34.1294C50.9725 33.6698 50.3485 33.4116 49.698 33.4116L38.4516 33.408L38.4516 22.1616C38.4513 21.5743 38.2405 21.0065 37.8574 20.5613C37.4743 20.1162 36.9443 19.823 36.3636 19.7352L36 19.71Z"
                    fill="#FF6347"
                  />
                  <path
                    d="M49.7224 32.8333L39.1669 32.8333L39.1669 22.2778C39.1669 21.4379 38.8333 20.6324 38.2394 20.0386C37.6455 19.4447 36.8401 19.1111 36.0002 19.1111C35.1604 19.1111 34.3549 19.4447 33.761 20.0386C33.1672 20.6324 32.8336 21.4379 32.8336 22.2778L32.8336 32.8333L22.278 32.8333C21.4381 32.8333 20.6327 33.1669 20.0388 33.7608C19.445 34.3547 19.1113 35.1601 19.1113 36C19.1113 36.8398 19.445 37.6453 20.0388 38.2391C20.6327 38.833 21.4381 39.1666 22.278 39.1666L32.8336 39.1666L32.8336 49.7222C32.8336 50.562 33.1672 51.3675 33.761 51.9614C34.3549 52.5552 35.1604 52.8889 36.0002 52.8889C36.8401 52.8889 37.6455 52.5552 38.2394 51.9614C38.8333 51.3675 39.1669 50.562 39.1669 49.7222L39.1669 39.1666L49.7224 39.1666C50.5623 39.1666 51.3677 38.833 51.9616 38.2391C52.5555 37.6453 52.8891 36.8398 52.8891 36C52.8891 35.1601 52.5555 34.3547 51.9616 33.7608C51.3677 33.1669 50.5623 32.8333 49.7224 32.8333Z"
                    fill="#12263A"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_i_177_160"
                  x="0"
                  y="0"
                  width="72"
                  height="75"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="3" />
                  <feGaussianBlur stdDeviation="2.5" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_177_160"
                  />
                </filter>
                <clipPath id="clip0_177_160">
                  <rect width="72" height="72" rx="17" fill="white" />
                </clipPath>
              </defs>
            </StyledSvg>
          </Link>
        )}
      </StyledLayout>
      <GoldWallet />
    </>
  );
}

const StyledLayout = styled.div`
  text-align: center;
  font-weight: bold;
  padding-bottom: 10%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 40vw;
  margin-left: auto;
  margin-right: auto; ;
`;

const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 8vw;
  grid-row-gap: 2vh;
`;

const StyledListElement = styled.div`
  border: 4px solid white;
  border-radius: 20px;
  padding: 1vh;
  -webkit-box-shadow: 0px 0px 8px 6px rgba(240, 101, 101, 0.5);
  -moz-box-shadow: 0px 0px 8px 6px rgba(240, 101, 101, 0.5);
  box-shadow: 0px 0px 8px 6px rgba(240, 101, 101, 0.5);
`;

const StyledSvg = styled.svg`
  position: fixed;
  bottom: 15%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.2rem;
  button {
    outline: none;
    border: none;
    background-color: transparent;
    margin-left: 1.5rem;
  }
`;

const StyledBuyingBackdrop = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  font-size: 1.2rem;
  background-image: linear-gradient(to top, #feada6 0%, #f5efef 100%);
  width: 80vw;
  height: 60vh;
  border: 4px solid white;
  border-radius: 20px;
  -webkit-box-shadow: 0px 0px 8px 6px rgba(240, 101, 101, 0.5);
  -moz-box-shadow: 0px 0px 8px 6px rgba(240, 101, 101, 0.5);
  box-shadow: 0px 0px 8px 6px rgba(240, 101, 101, 0.5);

  input {
    margin-left: 2rem;
    width: 3rem;
    border-radius: 25px;
    text-align: center;
  }

  button {
    color: red;
    background-color: whitesmoke;
    align-self: center;
    margin: 1rem;
  }

  .back {
    grid-area: 3 / 1 / 4 / 2;
  }

  .buy {
    grid-area: 3 / 2 / 4 / 3;
    color: white;
    background-color: green;
  }

  form {
    grid-area: 2 / 1 / 3 / 3;
  }
`;

const Border = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  border: 3px solid white;
  margin: 0.5rem;
`;

const GoldBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 2rem;
  position: absolute;
  top: 5vh;
  height: 10vh;
  width: fit-content;
  border: 4px solid gainsboro;
  border-radius: 50%;
  background-color: #efea5a;
  align-self: center;
  -webkit-box-shadow: 0px 0px 100px 20px rgba(239, 234, 90, 0.2);
  -moz-box-shadow: 0px 0px 100px 20px rgba(239, 234, 90, 0.2);
  box-shadow: 0px 0px 100px 20px rgba(239, 234, 90, 0.2);
`;

const FlexBackdrop = styled.div`
  display: flex;
  flex-direction: column;
`;
