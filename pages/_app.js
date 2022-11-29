import GlobalStyles from "../styles/GlobalStyles";
import Navigation from "../components/Navigation/Navigation";

function MyApp({Component, pageProps}) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
      <Navigation />
    </>
  );
}

export default MyApp;
