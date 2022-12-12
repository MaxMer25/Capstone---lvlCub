import styled from "styled-components";
import {useState} from "react";
import Image from "next/image";
import {Button} from "@mui/material";

export default function AddReward() {
  const [popup, setPopup] = useState(false);
  const [file, setFile] = useState();
  const [reward, setReward] = useState({
    title: "",
    image: "",
    cost: "",
    maxPerDay: "",
  });

  function handleChange(event) {
    setFile(URL.createObjectURL(event.target.files[0]));
  }

  function handle(event) {
    const newData = {...reward};
    newData[event.target.id] = event.target.value;
    setReward(newData);
  }

  const submitReward = async () => {
    await fetch("/api/rewards", {
      method: "POST",
      body: JSON.stringify(reward),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    await submitReward();
    setPopup(!popup);
  }
  const resetPopup = () => {
    setPopup(false);
  };

  return (
    <>
      <StyledLayout>
        <StyledForm>
          <label htmlFor="title">Rewardtitle</label>
          <input
            name="title"
            id="title"
            type="text"
            onChange={event => handle(event)}
          ></input>
          <label htmlFor="fileUpload">Upload a picture!</label>
          <input
            name="fileUpload"
            id="file"
            type="file"
            onChange={handleChange}
          ></input>
          <Image
            src={file}
            alt="Preview of uploaded picture"
            width={150}
            height={125}
          />
          <label htmlFor="cost">How much should it cost?</label>
          <input
            name="cost"
            id="cost"
            type="number"
            onChange={event => handle(event)}
          ></input>
          <label htmlFor="maxPerDay">
            How many times can it be purchased on one day?
          </label>
          <input
            name="maxPerDay"
            id="maxPerDay"
            type="number"
            onChange={event => handle(event)}
          ></input>
          <button onClick={handleSubmit} className="submitButton" type="submit">
            Create Task!
          </button>
        </StyledForm>
        <StyledPopup popup={popup}>
          <h1>That worked! You added one Reward.</h1>
          <h2>Do you want to add another Reward?</h2>
          <Button
            href="/home/tasks"
            className="rewardButton"
            variant="contained"
          >
            Rewards
          </Button>
          <Button
            onClick={resetPopup}
            className="addButton"
            variant="contained"
          >
            Add another one
          </Button>
        </StyledPopup>
      </StyledLayout>
    </>
  );
}

const StyledLayout = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  font-weight: bold;
  font-size: 1.3em;
  border: 4px solid white;
  border-radius: 20px;
  width: min(100% - 2rem, 600px);
  height: 80vh;
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
  background-color: #fcb8b0;
  box-shadow: 8px 8px 15px 5px rgba(0, 0, 0, 0.5);

  input[type="text"] {
    width: 90%;
    padding: 5%;
    margin: 2%;
    box-sizing: border-box;
    border-radius: 2%;
  }

  input[type="number"] {
    width: 20%;
    padding: 5%;
    margin: 2%;
    box-sizing: border-box;
    border-radius: 2%;
  }

  input[type="file"] {
    width: 35%;
    padding: 5%;
    color: rgba(0, 0, 0, 0);
  }
`;

const StyledPopup = styled.div`
  position: absolute;
  z-index: -1;
  font-size: 1.1em;
  width: 85%;
  height: 40vh;
  text-align: center;
  font-weight: bold;
  border: 4px solid white;
  border-radius: 20px;
  padding: 5%;
  background-color: lightgreen;
  transition: 1s;
  box-shadow: 8px 8px 15px 5px rgba(0, 0, 0, 0.5);
  .rewardButton {
    margin-right: 10%;
    background-color: tomato;
  }
  ${props => (props.popup ? "display: block; z-index: 2;" : "display: none;")}
`;
