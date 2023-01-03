import React, {useState, useEffect, useContext} from "react";
import {UserContext} from "../../components/UserContext";
import styled from "styled-components";

const ProgressBar = () => {
  const {user} = useContext(UserContext);
  const [shouldReload, setShouldReload] = useState(true);
  const [fetchUser, setFetchUser] = useState([]);
  const [userExperience, setUserExperience] = useState(null);
  const [userLevel, setUserLevel] = useState(null);

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

  useEffect(() => {
    fetchUser.find(x => {
      if (x._id === user.id) {
        setUserExperience(x.experience);
        setUserLevel(x.level);
      }
    });
  }, [shouldReload]);

  const maxLevel = userLevel * 100 * 1.5;
  const levelPercentage = (userExperience / (maxLevel / 100)).toFixed(2);

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
