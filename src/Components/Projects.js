import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/Animations.css";
import LazyLoad from "react-lazy-load";
import PTMImg from "../Images/pushThatMountainLogin.png";

const Projects = () => {
  return (
    <Container
      id="projects"
      style={{ height: "100vh", scrollMarginTop: "20rem" }}
    >
      <Row>
        <Col style={{ marginRight: "-20%" }}>
          <Row
            style={{
              // marginTop: "20vw",
              width: "70%",
              margin: "auto",
              justifyContent: "center",
              display: "flex",
            }}
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
        </Col>
        <Col
          style={{ justifyContent: "center", display: "flex", marginTop: "2%" }}
          lg={true}
        >
          <LazyLoad threshold={0.5} width={400}>
            <div
              style={{ justifyContent: "center", display: "flex" }}
              className="ptmSlideIn"
            >
              <a href="https://alpha.pushthatmountain.com/login">
                <img
                  alt="Push that Mountain"
                  src={PTMImg}
                  style={{
                    // width: "25vw",
                    justifyContent: "center",
                    display: "flex",
                    margin: "auto",
                    width: "100%",
                  }}
                />
              </a>
            </div>
          </LazyLoad>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
