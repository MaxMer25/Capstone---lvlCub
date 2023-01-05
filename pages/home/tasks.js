import Head from "next/head";
import {useState, useContext} from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header/Header";
import {UserContext} from "../../components/UserContext";
import {LoadingAnimation} from "../../components/LoadingAnimation";
import {Button} from "@mui/material";
import Exclamation from "../../components/Exclamation";
import CubCoin from "../../components/CubCoin";
import ExperienceCoin from "../../components/ExperienceCoin";
import LevelHeader from "../../components/LevelHeader/LevelHeader";
import {GoldWallet} from "../../components/GoldWallet";
import {useApi} from "../../hooks/useApi";
import {Fragment} from "react";
import AddButton from "../../components/Buttons/AddButton";
import {Backdrop} from "@mui/material";
const hallo = "hallo";

export default function Home() {
  const {user} = useContext(UserContext);
  const {
    response: tasks,
    load: taskLoading,
    fetchFromApi: fetchTasks,
  } = useApi("/api/tasks/");
  const {response, fetchFromApi: fetchUser} = useApi("/api/user/");
  const [backdrop, setBackdrop] = useState(false);
  const [taskData, setTaskData] = useState({});
  const [rewardData, setRewardData] = useState({});
  const [userData, setUserData] = useState({});
  const [childBackdrop, setChildBackdrop] = useState(false);

  // Patching tasks

  async function handleConfirmation(taskObject) {
    const response = await fetch("/api/tasks", {
      method: "PATCH",
      body: JSON.stringify(taskObject),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      alert("Update failed");
    }
    closeBackdrop();
    closeChildBackdrop();
    await fetchTasks();
  }

  async function handleRewards(taskObject) {
    const response = await fetch("/api/user", {
      method: "PATCH",
      body: JSON.stringify(taskObject),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      alert("Update failed");
    }
    closeBackdrop();
    closeChildBackdrop();
    await fetchUser();
  }

  function openBackdrop() {
    setBackdrop(true);
  }

  function closeBackdrop() {
    setBackdrop(false);
  }

  function openChildBackdrop() {
    setChildBackdrop(true);
  }

  function closeChildBackdrop() {
    setChildBackdrop(false);
  }

  function updateGoldAndExperience(
    experience,
    gold,
    whoDid,
    childExperience,
    childGold,
    childLevel
  ) {
    // max Value for the lvl progress bar
    let maxValue = childLevel * 100 * 1.5;
    // sum of old experience plus the new rewarded value
    let newExperience = parseInt(experience) + parseInt(childExperience);
    // sum of old gold plus the new rewarded value
    const newGold = parseInt(childGold) + parseInt(gold);
    let newChildLevel = childLevel;

    //gaining Level, when the experience exceeds the maxValue
    while (newExperience > maxValue) {
      newChildLevel++;
      newExperience = newExperience - maxValue;
      maxValue = maxValue + 150;
    }

    const restExperience = newExperience % maxValue;

    setRewardData({
      id: {name: whoDid},
      change: {experience: restExperience, level: newChildLevel, gold: newGold},
    });
  }

  return (
    <>
      <Head>
        <title>Home Taskboard</title>
      </Head>
      {user.type === "Parent" && <Header />}
      {user.type === "Child" && <LevelHeader />}
      {taskLoading && <LoadingAnimation />}
      <StyledList>
        {/*-- Mapped tasks for children --*/}

        {user.type === "Child" &&
          tasks.map(task => {
            if (task.review !== "in review" && task.review !== "reviewed") {
              return (
                <Fragment key={task._id}>
                  <StyledListElements>
                    <h2>{task.title}</h2>
                    <Image
                      priority
                      width={175}
                      height={122}
                      src={task.image}
                      alt="picture of a task"
                    />
                    <RewardContainer>
                      <h3>REWARDS</h3>
                      <p>
                        {task.gold}
                        <CubCoin className="cubImage" />
                      </p>
                      <p>
                        {task.experience}
                        <ExperienceCoin />
                      </p>
                    </RewardContainer>
                    <Link href={`/home/${task._id}`}>
                      <Button
                        className="taskButtons detail"
                        variant="contained"
                      >
                        Details
                      </Button>
                    </Link>
                    <Button
                      onClick={() => {
                        setUserData({
                          id: {_id: task._id},
                          change: {review: "in review", whoDid: user.name},
                        });
                        openChildBackdrop();
                      }}
                      className="taskButtons done"
                      variant="contained"
                    >
                      Done
                    </Button>
                    {childBackdrop && (
                      <Backdrop
                        sx={{
                          color: "aaa",
                          zIndex: theme => theme.zIndex.drawer + 1,
                        }}
                        open
                        onClick={closeBackdrop}
                      >
                        <FlexBackdrop>
                          <h2>are you sure?</h2>
                          <Button
                            onClick={() => closeChildBackdrop()}
                            className="btn"
                            color="error"
                            variant="contained"
                          >
                            NO
                          </Button>
                          <Button
                            onClick={() => {
                              handleConfirmation(userData);
                            }}
                            className="btn yes"
                            variant="contained"
                          >
                            YES
                          </Button>
                        </FlexBackdrop>
                      </Backdrop>
                    )}
                  </StyledListElements>
                </Fragment>
              );
            }
          })}

        {/*-- Mapped tasks for parents that need review --*/}

        {user.type === "Parent" &&
          tasks.map(task => {
            if (task.review === "in review")
              return (
                <StyledReviewElements key={task._id}>
                  <div className="ex">
                    <Exclamation />
                  </div>

                  <h2>{task.title} </h2>
                  <Image
                    className="reviewImage el"
                    priority
                    width={175}
                    height={122}
                    src={task.image}
                    alt="picture of a task"
                  />
                  <RewardContainer className="reviewGoldContainer el">
                    <h3>REWARDS</h3>
                    <p>
                      {task.gold}
                      <CubCoin className="cubImage" />
                    </p>
                    <p>
                      {task.experience}
                      <ExperienceCoin />
                    </p>
                  </RewardContainer>
                  <Link href={`/home/${task._id}`}>
                    <Button className="taskButtons btn1 el" variant="contained">
                      Details
                    </Button>
                  </Link>
                  <Button
                    onClick={() => {
                      openBackdrop();
                      setTaskData({
                        id: {_id: task._id},
                        change: {review: "reviewed"},
                      });
                      response.find(x => {
                        if (x.name === task.whoDid) {
                          updateGoldAndExperience(
                            task.experience,
                            task.gold,
                            task.whoDid,
                            x.experience,
                            x.gold,
                            x.level
                          );
                        }
                      });
                    }}
                    className="taskButtons btn2 el"
                    variant="contained"
                    color="success"
                  >
                    Review
                  </Button>
                  {backdrop && (
                    <Backdrop
                      sx={{
                        color: "aaa",
                        zIndex: theme => theme.zIndex.drawer + 1,
                      }}
                      open
                      onClick={closeBackdrop}
                    >
                      <FlexBackdrop>
                        <h2>are you sure?</h2>
                        <Button
                          onClick={() => closeBackdrop()}
                          className="btn"
                          color="error"
                          variant="contained"
                        >
                          NO
                        </Button>
                        <Button
                          onClick={() => {
                            handleConfirmation(taskData);
                            handleRewards(rewardData);
                          }}
                          className="btn"
                          variant="contained"
                        >
                          YES
                        </Button>
                      </FlexBackdrop>
                    </Backdrop>
                  )}
                </StyledReviewElements>
              );
          })}

        {/*-- Mapped tasks for parents without reviewed tasks--*/}

        {user.type === "Parent" &&
          tasks.map(task => {
            if (task.review !== "in review" && task.review !== "reviewed") {
              return (
                <StyledListElements key={task._id}>
                  <h2>{task.title}</h2>
                  <Image
                    priority
                    width={175}
                    height={122}
                    src={task.image}
                    alt="picture of a task"
                  />
                  <RewardContainer>
                    <h3>REWARDS</h3>
                    <p>
                      {task.gold}
                      <CubCoin className="cubImage" />
                    </p>
                    <p>
                      {task.experience}
                      <ExperienceCoin />
                    </p>
                  </RewardContainer>
                  <Link href={`/home/${task._id}`}>
                    <Button className="taskButtons" variant="contained">
                      Details
                    </Button>
                  </Link>
                </StyledListElements>
              );
            }
          })}
      </StyledList>
      {user.type === "Parent" && <AddButton endpoint="/home/addTask" />}
      <GoldWallet />
    </>
  );
}

const StyledList = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 90vw;
  padding-bottom: 5vh;

  .taskButtons {
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  img {
    grid-area: imageContainer;
    height: 100%;
    object-fit: contain;
    border-radius: 20px;
  }
`;

const StyledListElements = styled.div`
  text-align: center;
  border: 4px solid white;
  border-radius: 20px;
  display: grid;
  grid-template-areas:
    "title title"
    "imageContainer goldContainer"
    "imageContainer goldContainer"
    "detailsContainer done";
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background: #66717e;
  padding: 5%;
  gap: 5%;
  margin-bottom: 10%;
  -webkit-box-shadow: 8px 8px 15px 5px rgba(0, 0, 0, 0.5);
  box-shadow: 8px 8px 15px 5px rgba(0, 0, 0, 0.5);

  h2 {
    padding: 4% 4%;
    background: #ebebf0;
    border-radius: 2rem;
    width: relative;
    height: fit-content;
    -webkit-box-shadow: 8px 8px 15px 5px rgba(0, 0, 0, 0.5);
    box-shadow: 8px 8px 15px 5px rgba(0, 0, 0, 0.5);
    grid-area: title;
  }

  .reviewElements {
    border: 4px solid red;
  }

  .detail {
    grid-area: detailsContainer;
  }

  .done {
    grid-area: done;
    background-color: #33ca7f;
  }
`;

const RewardContainer = styled.div`
  border: 3px solid black;
  text-align: center;
  background: #001021;
  color: white;
  border-radius: 20px;
  grid-area: goldContainer;
  -webkit-box-shadow: 0px 0px 10px 15px rgba(240, 101, 101, 0.3);
  -moz-box-shadow: 0px 0px 10px 15px rgba(240, 101, 101, 0.3);
  box-shadow: 0px 0px 10px 15px rgba(240, 101, 101, 0.3);

  p {
    font-size: 1.4em;
  }
`;

const StyledReviewElements = styled.div`
  text-align: center;
  border: 4px solid red;
  border-radius: 20px;
  background: #fff4e6;
  margin-top: 10%;
  padding: 5%;

  h2 {
    padding: 4% 4%;
    background: #ebebf0;
    border-radius: 2rem;
    width: relative;
    height: fit-content;
    grid-area: 2 / 1 / 3 / 3;
    -webkit-box-shadow: 8px 8px 15px 5px rgba(0, 0, 0, 0.5);
    box-shadow: 8px 8px 15px 5px rgba(0, 0, 0, 0.5);
  }

  .reviewElements {
    border: 4px solid red;
  }

  .el {
    margin: 2%;
  }
`;

const FlexBackdrop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: white;
  height: 40vh;
  width: 40vh;
  border-radius: 20px;
  padding: 1rem;

  button {
    border-radius: 20px;
  }

  .yes {
    background-color: #33ca7f;
  }
`;
