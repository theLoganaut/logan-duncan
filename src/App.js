import "./App.css";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import original from "react95/dist/themes/original";
import ms_sans_serif from "./Images/VT323-Regular.ttf";
// import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import Stacks from "./Components/Stacks";
import LogoD from "./Images/Adobe-D-sm.svg";
import LogoL from "./Images/Adobe-L-sm.svg";
import bigBang from "./Images/New-BG-sm.svg";
import "./Styles/LoadingAnimation.scss";

const pixelFont = ms_sans_serif;

// const pixelBold = ms_sans_serif_bold;

// @font-face {
//   font-family: 'pixelFont';
//   src: url('${pixelBold}') format('woff2');
//   font-weight: bold;
//   font-style: normal
//  }

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'pixelFont';
    src: url('${pixelFont}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  body {
    letter-spacing: 0.07em;
    font-family: 'pixelFont';
    color: white;
  }
`;

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
      id="landing"
      fluid
      style={{
        // width: onMobile ? "900px" : "100%",
        height: "auto",
        backgroundColor: "#30153c",
        fontSize: "20px",
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
        <Container
          fluid
          id="bigBang"
          className="bigBang"
          style={{
            minHeight: "100vh",
            width: "100%",
            backgroundImage: `url(${bigBang})`,
            backgroundRepeat: "repeat",
            backgroundSize: "100%",
          }}
        >
          {doneLoading ? (
            <ThemeProvider theme={original}>
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
