import "./App.css";
import { useEffect, useState } from "react";
import { Container, Row, Modal, Button } from "react-bootstrap";
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { styleReset } from "react95";
import original from "react95/dist/themes/original";
// original Windows95 font (optionally)
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import Stacks from "./Components/Stacks";
import LogoD from "./Images/Adobe-D-sm.svg";
import LogoL from "./Images/Adobe-L-sm.svg";
import bigBang from "./Images/New-BG-sm.svg";
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

  const [onMobile, setOnMobile] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);

  useEffect(() => {
    console.log(window.innerWidth);

    if (window.innerHeight < 900) {
      setOnMobile(true);
      setShowModal(true);
    }

    const logoSmash = document.getElementById("letterL");

    const bigBang = document.getElementById("bigBang");

    logoSmash?.addEventListener("animationend", () => {
      setLoadingState("expansion");
    });

    bigBang?.addEventListener("animationend", () => {
      setDoneLoading(true);
    });

    console.log(onMobile, window.innerWidth);
  }, [loadingState, onMobile]);

  return (
    <Container
      id="landing"
      fluid
      style={{
        // width: onMobile ? "900px" : "100%",
        // fontFamily: pixelFont,
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
            <ThemeProvider theme={GlobalStyles}>
              {/* <Modal
                style={{ color: "black" }}
                show={showModal}
                onHide={handleClose}
              >
                <Modal.Body>
                  <a href="#landing">
                    <span style={{ color: "lightblue" }}>here.</span>
                  </a>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal> */}
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
