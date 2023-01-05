import Head from "next/head";
import {useState, useContext} from "react";
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
import {useApi} from "../../hooks/useApi";
import Addbutton from "../../components/Buttons/Addbutton";

export default function Reward() {
  const {user, setUser} = useContext(UserContext);
  const [rewards, load] = useApi("/api/rewards/");
  const [sumCost, setSumCost] = useState("");
  const [buyAmount, setBuyAmount] = useState(null);
  const [selectedReward, setSelectedReward] = useState(null);

  function closeBackdrop() {
    setSelectedReward(null);
  }

  function openBackdrop(reward) {
    setSelectedReward(reward);
  }

  function currentCost(event) {
    setSumCost(event.target.value * selectedReward.cost);
    setBuyAmount(event.target.value);
  }

  function handleBuyButton() {
    if (sumCost > user.gold) {
      alert("you don't have enough coins!");
    } else {
      let newGold = user.gold - sumCost;
      const newRewards = {...user.rewards, [selectedReward.title]: buyAmount};
      const newUserGold = {
        id: {_id: user.id},
        change: {gold: newGold, rewards: newRewards},
      };
      handleBuy(newUserGold);
      setUser({...user, gold: newGold, rewards: newRewards});
    }
  }

  async function handleBuy(taskObject) {
    const response = await fetch("/api/user", {
      method: "PATCH",
      body: JSON.stringify(taskObject),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      alert("Updated successfully!");
      closeBackdrop();
    } else {
      alert("Update failed");
    }
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
                      openBackdrop(reward);
                    }}
                  >
                    🛒
                  </Button>
                </FlexContainer>
              </StyledListElement>
            );
          })}
          {selectedReward && (
            <Backdrop
              sx={{
                color: "fff",
                zIndex: theme => theme.zIndex.drawer + 1,
              }}
              open
            >
              <FlexBackdrop>
                <GoldBar>
                  <Loader />
                  <p>{user.gold}</p>
                  <SmallCubCoin />
                </GoldBar>
                <StyledBuyingBackdrop>
                  <Border>
                    <h2>How many do you want to purchase?</h2>
                    <Image
                      width={125}
                      height={100}
                      src={selectedReward.image}
                      alt="picture of a reward"
                    ></Image>
                    <p>
                      {selectedReward.title}({selectedReward.cost}
                      <TinyCubCoin />)
                    </p>
                  </Border>
                  <form>
                    <label htmlFor="amount">Amount:</label>
                    <input
                      onInput={currentCost}
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
                    onClick={closeBackdrop}
                  >
                    CANCEL
                  </Button>
                  <Button
                    className="buy"
                    onClick={handleBuyButton}
                    variant="contained"
                  >
                    Buy
                  </Button>
                </StyledBuyingBackdrop>
              </FlexBackdrop>
            </Backdrop>
          )}
        </StyledList>
        {user.type === "Parent" && <Addbutton endpoint="/rewards/addReward" />}
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
  justify-content: space-around;
  width: 40vw;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 12vh;
`;

const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 8vw;
  grid-row-gap: 2vh;
`;

const StyledListElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 4px solid white;
  border-radius: 20px;
  padding: 0.2rem;
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
  justify-content: center;
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
  padding: 0.3rem;
  font-size: 2rem;
  position: absolute;
  top: 5vh;
  height: 10vh;
  width: fit-content;
  border: 4px solid lightyellow;
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

const Loader = styled.div`
  width: 10vh;
  z-index: 2;
  position: absolute;
  width: 800px;
  height: 150px;
  border-radius: 50%;
  background: radial-gradient(farthest-side, #efea5a 95%, #0000) 50% 1px/12px
      12px no-repeat,
    radial-gradient(farthest-side, #0000 calc(100% - 14px), transparent 0);
  animation: s9 4s infinite linear;
  @keyframes s9 {
    to {
      transform: rotate(1turn);
    }
  }
`;
