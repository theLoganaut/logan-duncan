import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mockanaut from "../Images/mockLoganaut.png";

const AboutMe = () => {
  return (
    <section>
      <Container id="aboutme" style={{ height: "100vh" }}>
        <Row>
          <Col>
            <Row>{/* for spacing */}</Row>
            <Row style={{ marginTop: "18rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "70%",
                  margin: "auto",
                  marginLeft: "30%",
                }}
              >
                <div style={{ fontSize: "20px" }}>
                  <div>
                    and I've always been fascinated by the wonders developers
                    can create. Memory lane is filled with things that can only
                    come from writing that code. A specific one sticks out to me
                    though, an always-online civilization-like browser games
                    called Ironfell. When it went offline I made it one of my
                    goals to build it again.
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
          <Col
            style={{
              textAlign: "center",
              marginLeft: "-10%",
            }}
          >
            {/* testing border offset */}
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "18rem",
                marginLeft: "-5%",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  height: "350px",
                  width: "350px",
                  verticalAlign: "middle",
                  border: "2px solid yellow",
                  marginLeft: "20px",
                  marginTop: "10px",
                }}
              />
              <img
                src="/mockLoganaut.png"
                alt="My Headshot"
                style={{
                  position: "absolute",
                  maxHeight: "350px",
                  maxWidth: "350px",
                  border: "2px solid red",
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;
