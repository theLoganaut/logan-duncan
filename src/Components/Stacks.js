import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react95";
import { awsTools, DAOther, frontend } from "../Middleware/StackObjects";
import "../Styles/Stacks.css";
// import styled, { keyframes } from "styled-components";
import StackGraph from "./StackGraph";

const Stacks = () => {
  const [currentStacks, setCurrentStacks] = useState(frontend);
  return (
    <Container
      style={{ height: "100vh", marginTop: "18rem", marginBottom: "-18rem" }}
    >
      <Row>
        <Col>
          {/* bottom for animation is 18rem, top is below */}
          <Row
            style={{
              alignItems: "center",
              justifyContent: "center",

              scrollMarginTop: "20rem",
            }}
            id="stacks"
          >
            <div style={{ textAlign: "center" }}>here are my stacks;</div>
            <Button
              style={{ marginTop: ".5rem", marginRight: ".5rem" }}
              onClick={() => setCurrentStacks(frontend)}
            >
              Frontend
            </Button>
            <Button
              style={{ marginTop: ".5rem", marginRight: ".5rem" }}
              onClick={() => setCurrentStacks(awsTools)}
            >
              AWS
            </Button>
            <Button
              style={{ marginTop: ".5rem", marginRight: ".5rem" }}
              onClick={() => setCurrentStacks(DAOther)}
            >
              DA/Other
            </Button>
          </Row>
          <Row>
            <Col
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  marginTop: "1rem",
                }}
              >
                Hover over each tool to learn why I'm using it below.
              </div>
              <StackGraph currentStacks={currentStacks} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Stacks;
