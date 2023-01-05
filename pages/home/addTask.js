import styled from "styled-components";
import {useState} from "react";
import {Button} from "@mui/material";
import Image from "next/image";
import Popup from "../../components/Popup";

export default function AddTask() {
  const [file, setFile] = useState();
  const [popup, setPopup] = useState(false);
  const [task, setTask] = useState({
    title: "",
    details: "",
    image:
      "https://via.placeholder.com/150x125/FFFF00/000000?text=Placeholder+Image",
    forWhom: "",
    whoDid: "",
    until: "",
    gold: 0,
    experience: 0,
    review: "",
  });

  function handleChange(event) {
    setFile(URL.createObjectURL(event.target.files[0]));
  }

  function handle(event) {
    const newData = {...task};
    newData[event.target.id] = event.target.value;
    setTask(newData);
  }

  function triggerPopup() {
    setPopup(previousState => !previousState);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await submitTask();
    triggerPopup();
  }

  async function submitTask() {
    await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <StyledFlex>
      <StyledForm>
        {/*-----------title----------- */}

        <div>
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

        <div>
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

        <div>
          <label htmlFor="picture">Choose a picture</label>
          <input
            onChange={handleChange}
            type="file"
            name="picture"
            id="image"
            placeholder="Add a picture"
          ></input>
          {file && (
            <Image
              src={file}
              alt="Preview of uploaded picture"
              width={150}
              height={125}
            />
          )}
        </div>

        {/*-----------rewards----------- */}

        <div>
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

        <Button
          variant="contained"
          onClick={handleSubmit}
          className="submitButton"
          type="submit"
        >
          Create Task!
        </Button>
      </StyledForm>
      {popup && (
        <Popup>
          <h1>That worked! You added one Task.</h1>
          <h2>Do you want to add another task?</h2>
          <Button href="/home/tasks" className="homeButton" variant="contained">
            Home
          </Button>
          <Button
            onClick={triggerPopup}
            className="addButton"
            variant="contained"
          >
            Add another one
          </Button>
        </Popup>
      )}
    </StyledFlex>
  );
}

const StyledForm = styled.form`
  text-align: center;
  font-weight: bold;
  font-size: 1.3em;
  border: 4px solid white;
  border-radius: 20px;
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
  padding: 5%;
  background-color: #fcb8b0;
  box-shadow: 8px 8px 15px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  width: 90vw;
  height: 80vh;
  padding: 2%;
  margin: 2%;
  box-sizing: border-box;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;

  label {
    display: inline-block;
    padding: 0 1em;
  }

  input[type="text"],
  [type="number"] {
    text-align: center;
    width: 90%;
    padding: 1rem;
    margin: 2%;
    box-sizing: border-box;
    border-radius: 25px;
  }

  input[type="file"] {
    padding: 5%;
    margin-left: 7rem;
    box-sizing: border-box;
    border-radius: 2%;
    color: rgba(0, 0, 0, 0);
  }

  button {
    position: absolute;
    bottom: 20vh;
    align-self: center;
  }

  fieldset {
    border: 2px solid gold;
    border-radius: 25px;
    margin-top: 2rem;
  }
`;

const StyledFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
