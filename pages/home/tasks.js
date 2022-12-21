import Head from "next/head";
import {useState, useEffect, useContext} from "react";
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

export default function Home() {
  const {user} = useContext(UserContext);
  const [tasks, setTasks] = useState([]);
  const [shouldReload, setShouldReload] = useState(true);
  const [load, setLoad] = useState(false);
  const [popup, setPopup] = useState(false);
  const [fetchUser, setFetchUser] = useState([]);

  // get data

  useEffect(() => {
    const getTasks = async () => {
      try {
        setLoad(!load);
        const response = await fetch("/api/tasks/");
        if (response.ok) {
          const data = await response.json();
          setTasks(data);
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
      getTasks();
    }
  }, [shouldReload]);

  // get userData

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch("/api/user/");
        if (response.ok) {
          const data = await response.json();
          setFetchUser(data);
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
      getUser();
    }
  }, [shouldReload]);

  // Patching tasks

  const handleConfirmation = async taskObject => {
    const response = await fetch("/api/tasks", {
      method: "PATCH",
      body: JSON.stringify(taskObject),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      alert("Updated successfully!");
      setShouldReload(true);
    } else {
      alert("Update failed");
    }
    setPopup(false);
  };

  const handleRewards = async taskObject => {
    const response = await fetch("/api/user", {
      method: "PATCH",
      body: JSON.stringify(taskObject),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      alert("Updated successfully!");
      setShouldReload(true);
    } else {
      alert("Update failed");
    }
  };

  function updateGoldAndExperience(
    experience,
    gold,
    whoDid,
    childExperience,
    childGold,
    childLevel
  ) {
    let maxValue = childLevel * 100 * 1.5;
    let newExperience = parseInt(experience) + parseInt(childExperience);
    const newGold = parseInt(childGold) + parseInt(gold);
    let newUserLevel = childLevel;

    while (newExperience > maxValue) {
      newUserLevel++;
      newExperience = newExperience - maxValue;
      console.log(newExperience);
    }

    const restExperience = newExperience % maxValue;

    const test = {
      id: {name: whoDid},
      change: {experience: restExperience, level: newUserLevel, gold: newGold},
    };

    handleRewards(test);
  }

  return (
    <>
      <Head>
        <title>Home Taskboard</title>
      </Head>
      {user.type === "Parent" && <Header />}
      {user.type === "Child" && <LevelHeader />}
      {load && <LoadingAnimation />}
      <StyledList>
        {/*-- Mapped tasks for children --*/}

        {user.type === "Child" &&
          tasks.map(task => {
            if (task.review !== "in review" && task.review !== "reviewed") {
              return (
                <>
                  <StyledListElements key={task._id}>
                    <h2>{task.title}</h2>
                    <Image
                      priority
                      width={175}
                      height={122}
                      src={task.image}
                      alt="picture of a task"
                    />
                    <StyledGoldContainer>
                      <h3>REWARDS</h3>
                      <p>
                        {task.gold}
                        <CubCoin className="cubImage" />
                      </p>
                      <p>
                        {task.experience}
                        <ExperienceCoin />
                      </p>
                    </StyledGoldContainer>
                    <Link href={`/home/${task._id}`}>
                      <Button
                        className="taskButtons detail"
                        variant="contained"
                      >
                        Details
                      </Button>
                    </Link>
                    <Button
                      onClick={() =>
                        setPopup({
                          id: {_id: task._id},
                          change: {review: "in review", whoDid: user.name},
                        })
                      }
                      className="taskButtons done"
                      variant="contained"
                    >
                      Done
                    </Button>
                  </StyledListElements>
                </>
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
                  <StyledGoldContainer className="reviewGoldContainer el">
                    <h3>REWARDS</h3>
                    <p>
                      {task.gold}
                      <CubCoin className="cubImage" />
                    </p>
                    <p>
                      {task.experience}
                      <ExperienceCoin />
                    </p>
                  </StyledGoldContainer>
                  <Link href={`/home/${task._id}`}>
                    <Button className="taskButtons btn1 el" variant="contained">
                      Details
                    </Button>
                  </Link>
                  <Button
                    onClick={() => {
                      setPopup({
                        id: {_id: task._id},
                        change: {review: "reviewed"},
                      });
                      fetchUser.find(x => {
                        if (x.name === task.whoDid) {
                          // setUserExperience(x.experience);
                          // setUserGold(x.gold);
                          // setUserLevel(x.level);
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
                  <StyledGoldContainer>
                    <h3>REWARDS</h3>
                    <p>
                      {task.gold}
                      <CubCoin className="cubImage" />
                    </p>
                    <p>
                      {task.experience}
                      <ExperienceCoin />
                    </p>
                  </StyledGoldContainer>
                  <Link href={`/home/${task._id}`}>
                    <Button className="taskButtons" variant="contained">
                      Details
                    </Button>
                  </Link>
                </StyledListElements>
              );
            }
          })}

        {popup && (
          <StyledPopup>
            <h2>are you sure?</h2>
            <Button
              onClick={() => setPopup(false)}
              className="btn"
              color="error"
              variant="contained"
            >
              NO
            </Button>
            <Button
              onClick={() => {
                handleConfirmation(popup);
              }}
              className="btn"
              variant="contained"
            >
              YES
            </Button>
          </StyledPopup>
        )}
      </StyledList>
      {user.type === "Parent" && (
        <Link href="/home/addTask">
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
  background: #fff4e6;
  padding: 5%;
  gap: 5%;
  margin-top: 5vh;
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
  }
`;

const StyledGoldContainer = styled.div`
  border: 3px solid black;
  text-align: center;
  background: #d89848;
  border-radius: 20px;
  grid-area: goldContainer;

  p {
    font-size: 1.4em;
  }
`;

const StyledSvg = styled.svg`
  position: fixed;
  bottom: 15%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`;

const StyledPopup = styled.div`
  position: fixed;
  top: 50%;
  left: 10%;
  margin-left: 0 auto;
  margin-top: 1vh;
  font-size: 1.1em;
  width: 80%;
  height: fit-content;
  text-align: center;
  font-weight: bold;
  border: 4px solid white;
  border-radius: 20px;
  padding: 5%;
  background-color: lightgreen;
  transition: 1s;
  box-shadow: 8px 8px 15px 5px rgba(0, 0, 0, 0.5);

  .btn {
    margin-left: 1vh;
    margin-top: 1vh;
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
