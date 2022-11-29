import GlobalStyles from "../styles/GlobalStyles";
import Navigation from "../components/Navigation/Navigation";
import {useState} from "react";

function MyApp({Component, pageProps}) {
  const [currentPage, setCurrentPage] = useState("home");
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
}

export default MyApp;
