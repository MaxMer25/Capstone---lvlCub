import styled from "styled-components";
import {useState} from "react";

export default function AddTask() {
  const [popup, setPopup] = useState(false);
  const [task, setTask] = useState({
    title: "",
    details: "",
    image: "",
    whichOne: "",
    until: "",
    gold: 0,
    experience: 0,
  });

  function handle(e) {
    const newData = {...task};

    newData[e.target.id] = e.target.value;

    setTask(newData);

    console.log(newData);
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

  async function handleSubmit(e) {
    e.preventDefault();
    await submitTask();
    setPopup(!popup);
  }

  return (
    <div>
      <StyledForm>
        {/*-----------title----------- */}

        <div className="title">
          <label htmlFor="title">Title</label>
          <input
            onChange={e => handle(e)}
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
            onChange={e => handle(e)}
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
            onChange={e => handle(e)}
            type="file"
            name="picture"
            id="image"
            placeholder="Add a picture"
          ></input>
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
            onChange={e => handle(e)}
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
              onChange={e => handle(e)}
              name="gold"
              type="number"
              id="gold"
              required
            ></input>
            <label htmlFor="experience">Experience</label>
            <input
              onChange={e => handle(e)}
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
        {popup ? <div>Great Success!</div> : null}
      </StyledForm>
    </div>
  );
}

const StyledForm = styled.form`
  text-align: center;
  font-weight: bold;
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
    padding: 12px 20px;
    margin: 8px 0;
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

  input[type="text"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border-radius: 2%;
  }

  input[type="number"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border-radius: 2%;
  }
  input[type="file"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border-radius: 2%;
    color: rgba(0, 0, 0, 0);
  }

  input[type="date"] {
    background-color: lightskyblue;
    color: white;
    font-size: 18px;
    border: none;
  }
`;
