import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { List, ListItem, Button } from "react95";
import {
  awsTools,
  reactTools,
  dustyTools,
  futureTools,
} from "../Middleware/StackObjects";
import "../Styles/Stacks.css";
// import styled, { keyframes } from "styled-components";
import MiniDesc from "./MiniDesc";
import StackGraph from "./StackGraph";

const Stacks = () => {
  const [currentStacks, setCurrentStacks] = useState([awsTools, reactTools]);
  const [hover, setHover] = useState("");
  return (
    <Container style={{ height: "110vh" }}>
      <Row>
        <Col>{/* logan spacing */}</Col>
        <Col>{/* nav spacing */}</Col>
      </Row>
      <Row>
        <Col>
          <Row>{/* for spacing */}</Row>
          {/* bottom for animation is 18rem, top is below */}
          <Row
            style={{
              paddingTop: "18rem",
              alignItems: "center",
              justifyContent: "center",
              scrollMarginTop: "-5em",
            }}
            id="stacks"
          >
            <div style={{ textAlign: "center" }}>here are my stacks;</div>
            <Button
              style={{ marginTop: ".5rem", marginRight: ".5rem" }}
              onClick={() => setCurrentStacks([awsTools, reactTools])}
            >
              Working
            </Button>
            <Button
              style={{ marginTop: ".5rem", marginRight: ".5rem" }}
              onClick={() => setCurrentStacks([dustyTools])}
            >
              Dusty
            </Button>
            <Button
              style={{ marginTop: ".5rem", marginRight: ".5rem" }}
              onClick={() => setCurrentStacks([futureTools])}
            >
              Future
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
              <MiniDesc hover={hover} />
              <StackGraph setHover={setHover} currentStacks={currentStacks} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Stacks;
