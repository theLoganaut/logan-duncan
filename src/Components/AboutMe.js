import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutMe = () => {
  return (
    <section
      id="aboutme"
      style={{
        scrollMarginTop: "20rem",
      }}
    >
      <Container
        style={{
          height: "100vh",
        }}
      >
        <Row style={{ display: "flex" }}>
          <Col
            xs={true}
            style={{
              textAlign: "center",
              marginRight: "-25%",
            }}
          >
            <Container fluid>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  marginLeft: "-5%",
                  borderWidth: 4,
                  borderColor: "white",
                }}
              >
                <img
                  src="/myPortrait.png"
                  alt="My Headshot"
                  style={{
                    borderRadius: "50%",
                    borderWidth: 4,
                    borderColor: "white",
                    position: "absolute",
                    width: "25vw",
                  }}
                />
                <div className="circle visor"></div>
              </div>{" "}
            </Container>
          </Col>
          <Col lg={true}>
            <Row>{/* for spacing */}</Row>
            <Row style={{}}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "70%",
                  margin: "auto",
                  // marginLeft: "30%",
                }}
              >
                <div>
                  <div style={{ marginTop: "1rem" }}>
                    and I write some code. Well more like a lot. Did I finish
                    all my hobby projects? No. Did I learn and build myself into
                    a programmer ready for a career? Absolutely.
                  </div>
                  <div style={{ marginTop: "1rem" }}>
                    Currently working on a React Native app and exploring
                    Kotlin/Swift. That's just one of my paths; it's alongside
                    Python, some .NET, and a lot of AWS. Ready and waiting to
                    join your team and help develop something awesome!
                  </div>
                  <div style={{ marginTop: "1rem" }}>
                    Check out my stacks for more information!
                  </div>
                </div>
              </div>
            </Row>
            <Row style={{ marginLeft: "80%" }}></Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;
