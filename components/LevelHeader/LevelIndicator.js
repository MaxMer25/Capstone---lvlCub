import React, {useState, useEffect, useContext} from "react";
import styled from "styled-components";
import {UserContext} from "../../components/UserContext";

const LevelIndicator = () => {
  const {user} = useContext(UserContext);
  const [shouldReload, setShouldReload] = useState(true);
  const [fetchUser, setFetchUser] = useState([]);
  const [level, setLevel] = useState(null);

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
        setLevel(x.level);
      }
    });
  }, [shouldReload]);

  return <StyledLevel>{level}</StyledLevel>;
};

export default LevelIndicator;

const StyledLevel = styled.div`
  font-size: 1.5em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  width: 50px;
  border: 2px solid black;
  border-radius: 50%;
`;
