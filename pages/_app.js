import GlobalStyles from "../styles/GlobalStyles";
import Navigation from "../components/Navigation/Navigation";
import {UserContextProvider} from "../components/UserContext";
import React from "react";
import Head from "next/head";

function MyApp({Component, pageProps}) {
  return (
    <div>
      <Head>
        <title>lvlCub</title>
      </Head>
      <UserContextProvider>
        <GlobalStyles />
        <Component {...pageProps} />
        <Navigation />
      </UserContextProvider>
    </div>
  );
}

export default MyApp;
