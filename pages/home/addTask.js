import styled from "styled-components";

export default function addTask() {
  return (
    <StyledForm>
      <div className="title">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          placeholder="what should your task be called?"
          required
        ></input>
      </div>
      <div className="description">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          placeholder="are there details to your task?"
        ></input>
      </div>
      <div className="fileUpload">
        <label htmlFor="picture">Choose a picture</label>
        <input type="file" name="picture" placeholder="Add a picture"></input>
      </div>
      <div className="checkboxes">
        <fieldset>
          <legend>general task or for one specific child?</legend>
          <label htmlFor="general">General</label>
          <input type="checkbox" name="general" checked></input>
          <label htmlFor="first">First Child</label>
          <input type="checkbox" name="first"></input>
        </fieldset>
      </div>
      <div className="calendar">
        <label htmlFor="until">by when should it be done?</label>
        <input type="date" name="until"></input>
      </div>
      <div className="rewards">
        <fieldset>
          <legend>Rewards:</legend>
          <label htmlFor="gold">Gold</label>
          <input name="gold" type="text"></input>
          <label htmlFor="experience">Experience</label>
          <input name="experience" type="text"></input>
        </fieldset>
      </div>
      <button className="submitButton" type="submit">
        Create Task!
      </button>
    </StyledForm>
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
  .description {
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
