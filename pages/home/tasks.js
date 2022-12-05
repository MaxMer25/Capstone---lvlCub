import Head from "next/head";
import {useState, useEffect} from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header/Header";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [shouldReload, setShouldReload] = useState(true);

  // get data

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("/api/tasks");
        if (response.ok) {
          const data = await response.json();
          setTasks(data);
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
      getProducts();
    }
  }, [shouldReload]);

  // delete function for the future

  // async function handleDelete(id) {
  //   try {
  //     const response = await fetch(`/api/tasks/${id}`, {method: "DELETE"});
  //     if (response.ok) {
  //       console.log("Product deleted!");
  //     } else {
  //       throw new Error(`Fetch fehlgeschlagen mit Status: ${response.status}`);
  //     }
  //   } catch (error) {
  //     alert(error.message);
  //   }
  //   setShouldReload(true);
  // }

  return (
    <div>
      <Head>
        <title>Home Taskboard</title>
      </Head>
      <Header />
      <StyledList>
        {tasks.map(task => {
          return (
            <StyledListElements key={task._id}>
              <h2>{task.title}</h2>
              <StyledImage
                priority={true}
                width={175}
                height={122}
                src={task.image}
                alt="picture of a task"
              ></StyledImage>
              <StyledGoldContainer>
                <h3>REWARDS</h3>
                <p>{JSON.stringify(task.gold)}cc</p>
                <p>{task.experience}exp</p>
              </StyledGoldContainer>
              <Link href={`/home/${task._id}`}>
                <StyledDetailsButton>Details</StyledDetailsButton>
              </Link>
            </StyledListElements>
          );
        })}
      </StyledList>
    </div>
  );
}

const StyledList = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 90vw;
  padding-bottom: 150px;
`;

const StyledListElements = styled.div`
  text-align: center;
  border: 4px solid #78290f;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  isolation: isolate;
  background: #fff4e6;
  margin-top: 10%;
  padding: 10px;
  gap: 15px;

  h2 {
    padding: 6px 40px;
    gap: 6px;
    background: #ebebf0;
    border-radius: 100px;
    width: relative;
    height: fit-content;
    grid-area: 1 / 1 / 2 / 3;
    -webkit-box-shadow: 8px 8px 15px 5px rgba(0, 0, 0, 0.5);
    box-shadow: 8px 8px 15px 5px rgba(0, 0, 0, 0.5);
  }
`;

const StyledGoldContainer = styled.div`
  border: 1px solid black;
  text-align: center;
  background: #d89848;
  border-radius: 39.5px;
  grid-area: 2 / 2 / 3 / 3;
`;

const StyledImage = styled(Image)`
  grid-area: 2 / 1 / 3 / 2;
`;

const StyledDetailsButton = styled.button`
  border-radius: 20px;
  position: relative;
  left: 45%;
  bottom: -100%;
`;
