import React, {useState, useEffect, useContext} from "react";
import {UserContext} from "../../components/UserContext";
import styled from "styled-components";

const ProgressBar = () => {
  const {user} = useContext(UserContext);
  const [shouldReload, setShouldReload] = useState(true);
  const [fetchUser, setFetchUser] = useState([]);
  const [load, setLoad] = useState(false);
  const [filteredUser, setFilteredUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        setLoad(!load);
        const response = await fetch("/api/user/");
        if (response.ok) {
          const data = await response.json();
          setFetchUser(data);

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
      getUser();
    }
  }, [shouldReload]);

  useEffect(() => {
    fetchUser.find(x => {
      if (x._id === user.id) {
        setFilteredUser(x.experience);
        console.log(filteredUser);
      }
    });
  }, [shouldReload]);

  return (
    <>
      <label htmlFor="progress"></label>
      <StyledProgressBar
        id="progress"
        value={filteredUser}
        max="100"
      ></StyledProgressBar>
      <button>test</button>
    </>
  );
};

export default ProgressBar;

const StyledProgressBar = styled.progress`
  width: 100%;
  height: 3rem;
`;
