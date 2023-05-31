import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "@aws-amplify/ui-react/styles.css";
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
              Push that Mountain (PTM) is a social site with a goal for
              interaction; motivating and inspiring others which in turn
              empowers you. You can sign up and even post, but it would cost too
              much to actually run. I wanted to try my hand at a twitter
              inspired build.
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
            </div>
          </LazyLoad>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
