import React, {useState, useEffect, useContext} from "react";
import {UserContext} from "../../components/UserContext";
import styled from "styled-components";
import {useApi} from "../../hooks/useApi";

const ProgressBar = () => {
  const {user} = useContext(UserContext);
  const [userExperience, setUserExperience] = useState(null);
  const [userLevel, setUserLevel] = useState(null);
  const [fetchedUser] = useApi("/api/user/");

  useEffect(() => {
    fetchedUser.find(x => {
      if (x._id === user.id) {
        setUserExperience(x.experience);
        setUserLevel(x.level);
      }
    });
  }, [fetchedUser]);

  const maxLevel = userLevel ? userLevel * 100 * 1.5 : 0;
  const levelPercentage = userExperience
    ? (parseInt(userExperience) / (maxLevel / 100)).toFixed(2)
    : 0;

  return (
    <>
      <label htmlFor="progress">{levelPercentage}%</label>
      <StyledProgressBar
        id="progress"
        value={userExperience}
        max={maxLevel}
      ></StyledProgressBar>
    </>
  );
};

export default ProgressBar;

const StyledProgressBar = styled.progress`
  width: 100%;
  height: 2rem;
  accent-color: #ff6347;

  label {
    margin-left: 40%;
  }
`;
