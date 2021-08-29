import { createGlobalStyle, ThemeProvider } from "styled-components";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import theme from "../src/theme/index";
import Head from "next/head";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

html,
body {
  margin: 0;
  padding: 0;
  background-color: black;
}

a {
  color: inherit;
}

/* #__next {
  background-color: tomato;
  min-height: calc(100vh);
  display: flex;
  flex-direction: column;
} */
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Rafaflix</title>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
