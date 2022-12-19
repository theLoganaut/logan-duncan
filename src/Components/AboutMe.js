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
              // marginLeft: "20%",
            }}
          >
            {/* testing border offset */}
            <Container fluid>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  // marginTop: "15rem",
                  marginLeft: "-5%",
                }}
              >
                <img
                  src="/mockLoganaut.png"
                  alt="My Headshot"
                  style={{
                    borderRadius: "50%",
                    position: "absolute",
                    width: "20vw",
                  }}
                />
                <div className="circle visor"></div>
                {/* 
              <img
                src="/mockLoganaut.png"
                alt="My Headshot"
                style={{
                  position: "absolute",
                  maxHeight: "30vh",
                  maxWidth: "30vw",
                  border: "2px solid red",
                }}
              /> */}
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
                  <div>
                    {/* and I've always been fascinated by the wonders developers
                    can create. Memory lane is filled with things that can only
                    come from writing that code. A specific one sticks out to me
                    though, an always-online civilization-like browser games
                    called Ironfell. When it went offline I made it one of my
                    goals to build it again. */}
                  </div>
                  <div style={{ marginTop: "1rem" }}>
                    More recently, I’ve been developing my full stack skill set
                    and rounding out my skills as a future software engineer.
                    Building with React and shipping to an AWS backend makes a
                    single man ship easy to run.
                  </div>
                  <div style={{ marginTop: "1rem" }}>
                    Check out my stacks for more information!
                  </div>
                  <div style={{ marginTop: "1rem" }}>
                    Oh and I'm a huge fan of the 90's aesthetic if you can't
                    tell.
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
