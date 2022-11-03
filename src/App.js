import "./App.css";
import { useEffect, useState, useRef } from "react";
import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { styleReset, List, ListItem, Divider } from "react95";
// pick a theme of your choice
import original, { desktopBackground } from "react95/dist/themes/original";
// original Windows95 font (optionally)
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import Stacks from "./Components/Stacks";
import LazyLoad from "react-lazy-load";

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`;

function App() {
  return (
    <Container
      fluid
      style={{
        minHeight: "100vh",
        backgroundColor: desktopBackground,
      }}
    >
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <div
          style={{
            minHeight: "100vh",
            backgroundColor: desktopBackground,
          }}
        >
          <div
            style={{
              position: "sticky",
              top: "3rem",
            }}
          >
            <Header />
          </div>
          <Landing />
          <AboutMe />
          <Projects />
          <Stacks />
        </div>
      </ThemeProvider>
    </Container>
  );
}

export default App;
