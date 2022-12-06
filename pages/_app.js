import GlobalStyles from "../styles/GlobalStyles";
import Navigation from "../components/Navigation/Navigation";
import {UserContextProvider} from "../components/UserContext";
import React from "react";
import Head from "next/head";
import {Caveat} from "@next/font/google";

const caveat = Caveat({
  weight: ["400"],
  subsets: ["latin"],
});

function MyApp({Component, pageProps}) {
  return (
    <main className={caveat.className}>
      <Head>
        <title>lvlCub</title>
      </Head>

      <UserContextProvider>
        <GlobalStyles />
        <Component {...pageProps} />
        <Navigation />
      </UserContextProvider>
    </main>
  );
}

export default MyApp;
