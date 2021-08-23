import { createGlobalStyle, ThemeProvider } from "styled-components";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  :root {
  --primary: #2a7ae4;
  --black: #000000;
  --blackLighter: #9e9e9e;
  --grayLight: #f5f5f5;
  --grayMedium: #e5e5e5;
  --white: #ffffff;
  --frontEnd: #6bd1ff;
  --backEnd: #00c86f;
}

html,
body {
  margin: 0;
  padding: 0;
}

a {
  color: inherit;
}

#root {
  min-height: calc(100vh);
  display: flex;
  flex-direction: column;
}
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
