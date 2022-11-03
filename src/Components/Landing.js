import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { desktopBackground } from "react95/dist/themes/original";
import LunarPhases from "./LunarPhases";

const Landing = () => {
  const [windowOffest, setWindowOffest] = useState(0);

  useEffect(() => {
    let topDist =
      window.pageYOffset +
      document.getElementById("landing").getBoundingClientRect().top;
    setWindowOffest(topDist);
  }, []);

  return (
    <Container
      id="landing"
      style={{
        height: `100vh`,
        backgroundColor: desktopBackground,
        marginTop: `-${windowOffest}px`,
      }}
    >
      <Row>
        <Col>
          <Row style={{ marginTop: "18rem" }}>
            <div style={{ textAlign: "center", fontSize: "18px" }}>
              a self-taught developer with a knack for designing and a love of
              space.
            </div>
            <div style={{ textAlign: "center", fontSize: "18px" }}>
              Please enjoy this visualization of the moon as it reaches its
              current phase.
            </div>
            <div style={{ textAlign: "center", fontSize: "22px" }}>
              Go ahead, restart it.
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                margin: "auto",
                marginTop: "1rem",
                justifyContent: "center",
              }}
            >
              <LunarPhases />
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
