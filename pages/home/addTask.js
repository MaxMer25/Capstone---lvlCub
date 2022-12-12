import styled from "styled-components";
import {useState} from "react";
import {Button} from "@mui/material";
import Image from "next/image";

export default function AddTask() {
  const [file, setFile] = useState();
  const [popup, setPopup] = useState(false);
  const [task, setTask] = useState({
    title: "",
    details: "",
    image:
      "https://via.placeholder.com/150x125/FFFF00/000000?text=Placeholder+Image",
    whichOne: "",
    until: "",
    gold: 0,
    experience: 0,
  });

  function handleChange(event) {
    setFile(URL.createObjectURL(event.target.files[0]));
  }

  function handle(event) {
    const newData = {...task};
    newData[event.target.id] = event.target.value;
    setTask(newData);
  }

  const submitTask = async () => {
    await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    await submitTask();
    setPopup(!popup);
  }

  const resetPopup = () => {
    setPopup(false);
  };

  return (
    <StyledFlex>
      <StyledForm>
        {/*-----------title----------- */}

        <div className="title">
          <label htmlFor="title">Title</label>
          <input
            onChange={event => handle(event)}
            type="text"
            name="title"
            id="title"
            placeholder="what should your task be called?"
            required
          ></input>
        </div>

        {/*-----------details----------- */}

        <div className="details">
          <label htmlFor="details">Details</label>
          <input
            onChange={event => handle(event)}
            type="text"
            name="details"
            id="details"
            placeholder="are there details to your task?"
          ></input>
        </div>

        {/*-----------file----------- */}

        <div className="fileUpload">
          <label htmlFor="picture">Choose a picture</label>
          <input
            onChange={handleChange}
            type="file"
            name="picture"
            id="image"
            placeholder="Add a picture"
          ></input>
          <Image
            src={file}
            alt="Preview of uploaded picture"
            width={150}
            height={125}
          />
        </div>

        {/*-----------checkboxes----------- */}

        <div className="checkboxes">
          <fieldset>
            <legend>general task or for one specific child?</legend>
            <label htmlFor="general">General</label>
            <input type="checkbox" name="general" checked></input>
            <label htmlFor="first">First Child</label>
            <input type="checkbox" name="first"></input>
          </fieldset>
        </div>

        {/*-----------calendar----------- */}

        <div className="calendar">
          <label htmlFor="until">by when should it be done?</label>
          <input
            onChange={event => handle(event)}
            type="date"
            name="until"
            id="until"
          ></input>
        </div>

        {/*-----------rewards----------- */}

        <div className="rewards">
          <fieldset>
            <legend>Rewards:</legend>
            <label htmlFor="gold">Gold</label>
            <input
              onChange={event => handle(event)}
              name="gold"
              type="number"
              id="gold"
              required
            ></input>
            <label htmlFor="experience">Experience</label>
            <input
              onChange={event => handle(event)}
              name="experience"
              type="number"
              id="experience"
              required
            ></input>
          </fieldset>
        </div>

        {/*-----------submit----------- */}

        <button onClick={handleSubmit} className="submitButton" type="submit">
          Create Task!
        </button>
      </StyledForm>

      <StyledPopup popup={popup}>
        <h1>That worked! You added one Task.</h1>
        <h2>Do you want to add another task?</h2>
        <Button href="/rewards" className="homeButton" variant="contained">
          Home
        </Button>
        <Button onClick={resetPopup} className="addButton" variant="contained">
          Add another one
        </Button>
      </StyledPopup>
    </StyledFlex>
  );
}

const StyledForm = styled.form`
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
  padding: 5%;
  background-color: #fcb8b0;
  box-shadow: 8px 8px 15px 5px rgba(0, 0, 0, 0.5);

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  .title {
    grid-area: 1 / 1 / 2 / 3;
  }
  .details {
    grid-area: 2 / 1 / 3 / 3;
  }
  .fileUpload {
    grid-area: 3 / 1 / 4 / 2;
  }
  .checkboxes {
    grid-area: 3 / 2 / 4 / 3;
  }
  .calendar {
    grid-area: 4 / 1 / 5 / 2;
  }
  .rewards {
    grid-area: 4 / 2 / 5 / 3;
  }
  .submitButton {
    grid-area: 5 / 1 / 6 / 3;
    width: 50%;
    height: 50%;
    padding: 2%;
    margin: 2%;
    box-sizing: border-box;
    border-radius: 2%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;
  }

  label {
    display: inline-block;
    width: 5em;
    padding: 0 1em;
  }

  input[type="text"],
  [type="number"] {
    width: 100%;
    padding: 5%;
    margin: 2%;
    box-sizing: border-box;
    border-radius: 2%;
  }

  input[type="file"] {
    width: 100%;
    padding: 5%;
    margin: 2%;
    box-sizing: border-box;
    border-radius: 2%;
    color: rgba(0, 0, 0, 0);
  }

  input[type="date"] {
    background-color: lightskyblue;
    color: white;
    font-size: 1.1em;
    border: none;
  }
`;

const StyledPopup = styled.div`
  position: absolute;
  display: contents;
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
  .homeButton {
    margin-right: 10%;
    background-color: tomato;
  }
  ${props => (props.popup ? "display: none; z-index: 2;" : "")}
`;

const StyledFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
