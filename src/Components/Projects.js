import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Authenticator, ThemeProvider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { authComponents, authFormFields } from "./FakePTMAuth";
import "../Styles/Animations.css";
import LazyLoad from "react-lazy-load";

const Projects = () => {
  const melon = "#FF9F85";
  const lightyellow = "#F3EEC3";
  const yellow = "#F4D890";
  const muteRed = "#C08497";
  const babyBlue = "#A4C8CC";

  const testTheme = {
    tokens: {
      colors: {
        _hover: {
          value: muteRed,
        },
        background: {
          primary: {
            value: lightyellow,
          },
          secondary: {
            value: yellow,
          },
        },
        melon: {
          10: { value: "#F7B2A1" },
        },
        purple: {
          10: { value: "#dfcefd" },
          20: { value: "#c4a6fb" },
          40: { value: "#a97df9" },
          60: { value: "#8c51f6" },
          80: { value: "#6618f4" },
          90: { value: "#4509b2" },
          100: { value: "#210555" },
        },
        green: {
          10: { value: "#31f38f" },
          20: { value: "#29ce79" },
          40: { value: "#22aa64" },
          60: { value: "#1b874f" },
          80: { value: "#14663c" },
          90: { value: "#0e4629" },
          100: { value: "#0e4629" },
        },
        neutral: {
          10: { value: "#e3dee3" },
          20: { value: "#bdb2bd" },
          40: { value: "#7b6a80" },
          60: { value: "#FF9F85" },
          80: { value: "#FF9F85" },
          90: { value: "#FF9F85" },
          100: { value: "#0c001f" },
        },
        brand: {
          primary: {
            20: { value: "{colors.red.20}" },
            40: { value: "{colors.red.40}" },
            60: { value: "{colors.red.60}" },
            80: { value: "{colors.red.40}" },
            90: { value: muteRed },
            100: { value: "{colors.red.100}" },
          },
          secondary: {
            10: { value: "{colors.purple.10}" },
            20: { value: "{colors.purple.20}" },
            40: { value: "{colors.purple.40}" },
            60: { value: "{colors.purple.60}" },
            80: { value: "{colors.purple.80}" },
            90: { value: "{colors.purple.90}" },
            100: { value: "{colors.purple.100}" },
          },
        },
        border: {
          primary: { value: "{colors.neutral.40}" },
          secondary: { value: "{colors.neutral.40}" }, //top bar above create accnt
          tertiary: { value: "{colors.neutral.40}" },
        },
      },
      borderWidths: {
        small: { value: "2px" },
        medium: { value: "4px" },
        large: { value: "8px" },
      },
      radii: {
        xs: { value: "1rem" },
        small: { value: "2rem" },
        medium: { value: "2rem" },
        large: { value: "2rem" },
        xl: { value: "3rem" },
      },
      space: {
        xs: { value: "0.75rem" },
        small: { value: "1rem" },
        medium: { value: "1.5rem" },
        large: { value: "2rem" },
        xl: { value: "3rem" },
      },
      components: {
        radio: {
          button: {
            padding: { value: "{borderWidths.small}" },
            borderWidth: { value: "{borderWidths.small}" },
          },
        },
      },
    },
  };

  return (
    <Container id="projects" style={{ height: "100vh" }}>
      <Row>
        <Col>{/* logan spacing */}</Col>
        <Col>{/* nav spacing */}</Col>
      </Row>
      <Row>
        <Col>
          <Row>{/* for spacing */}</Row>
          <Row
            style={{ marginTop: "18rem", maxWidth: "25vw", marginLeft: "10%" }}
          >
            <div style={{ textAlign: "center" }}>
              and this is Push that Mountain!
            </div>
            <div style={{ marginTop: ".5em" }}>
              Push that Mountain (PTM) is a social site for motivating or
              inspiring yourself and others. Sign up and have others motivate
              you, or spread the good vibes yourself!
            </div>
            <div style={{ marginTop: ".5em" }}>
              Made with React, and AWS Amplify. Check out the
              <span>
                {" "}
                <a
                  style={{ textDecoration: "underline" }}
                  href="https://github.com/theLoganaut/motivate.me"
                >
                  Github
                </a>
              </span>
              .
            </div>
          </Row>
          <Row></Row>
        </Col>
        <Col>
          <LazyLoad threshold={0.5} width={400}>
            <div style={{ marginTop: "40%" }} className="ptmSlideIn">
              <ThemeProvider theme={testTheme}>
                <Authenticator
                  formFields={authFormFields}
                  components={authComponents}
                ></Authenticator>
              </ThemeProvider>
            </div>
          </LazyLoad>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
