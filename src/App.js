import "./App.css";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { styleReset } from "react95";
import Stacks from "./Components/Stacks";
import LogoD from "./Images/Adobe-D-sm.svg";
import LogoL from "./Images/Adobe-L-sm.svg";
import pixelTTF from "./Images/VT323-Regular.ttf";
import "./Styles/LoadingAnimation.scss";

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: "pixelFont";
    src: url(${pixelTTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }
  body {
    letter-spacing: 0.07em;
    font-family: pixelFont;
    color: white;
  }
`;

// base fonts incase i screw up
// @font-face {
//   font-family: 'ms_sans_serif';
//   src: url('${ms_sans_serif}') format('woff2');
//   font-weight: 400;
//   font-style: normal
// }
// @font-face {
//   font-family: 'ms_sans_serif';
//   src: url('${ms_sans_serif_bold}') format('woff2');
//   font-weight: bold;
//   font-style: normal
// }

function App() {
  const [loadingState, setLoadingState] = useState("atomSmash");

  const [doneLoading, setDoneLoading] = useState(false);

  useEffect(() => {
    console.log(window.innerWidth);

    const logoSmash = document.getElementById("letterL");

    const bigBang = document.getElementById("bigBang");

    logoSmash?.addEventListener("animationend", () => {
      setLoadingState("expansion");
    });

    bigBang?.addEventListener("animationend", () => {
      setDoneLoading(true);
    });
  }, [loadingState]);

  return (
    <Container
      id="top"
      fluid
      style={{
        height: "auto",
        backgroundColor: "#30153c",
      }}
    >
      <GlobalStyles />
      {loadingState === "atomSmash" ? (
        <div style={{ height: "100vh", backgroundColor: "#30153c" }}>
          <Row>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "45vh",
              }}
            >
              <img className="letterD" src={LogoD} alt="D" />
            </div>
          </Row>
          <Row>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img id="letterL" className="letterL" src={LogoL} alt="L" />
            </div>
          </Row>
        </div>
      ) : (
        <></>
      )}

      {loadingState === "expansion" ? (
        <Container fluid id="bigBang" className="bigBang">
          {doneLoading ? (
            <ThemeProvider theme={GlobalStyles}>
              <div
                className="headerDrop"
                style={{
                  position: "sticky",
                  top: "2rem",
                  zIndex: "2",
                }}
              >
                <Header />
              </div>
              <div className="opacityIn">
                <Landing />
              </div>

              <AboutMe />
              <Projects />
              <div
                style={{
                  position: "relative",
                  zIndex: "1",
                  // transform: ""
                }}
              >
                <Stacks />
              </div>
            </ThemeProvider>
          ) : (
            <></>
          )}
        </Container>
      ) : (
        <></>
      )}
    </Container>
  );
}

export default App;
