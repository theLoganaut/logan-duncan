import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Container style={{ minHeight: "10rem" }}>
      <Row>
        <Col>
          <Navbar>
            <Container>
              <Nav className="me-auto" style={{ fontSize: "14px" }}>
                <Nav.Link href="" style={{ marginLeft: "1em" }}>
                  logan.duncan512@gmail.com
                </Nav.Link>
                <Nav.Link href="" style={{ marginLeft: "1em" }}>
                  theLoganaut
                </Nav.Link>
                <Nav.Link href="" style={{ marginLeft: "1em" }}>
                  Resume
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <div style={{ fontSize: "60px", textAlign: "center" }}>I'm Logan</div>
        </Col>
        <Col>
          <Navbar>
            <Container>
              <Nav className="me-auto" style={{ fontSize: "32px" }}>
                <Nav.Link href="/#landing" style={{ marginRight: "1em" }}>
                  Top
                </Nav.Link>
                <Nav.Link href="/#aboutme" style={{ marginRight: "1em" }}>
                  About Me
                </Nav.Link>
                <Nav.Link href="/#projects" style={{ marginRight: "1em" }}>
                  Projects
                </Nav.Link>
                <Nav.Link href="/#stacks" style={{ marginRight: "1em" }}>
                  Stacks
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <div
              style={{
                fontSize: "60px",
                textAlign: "center",
                marginLeft: "1em",
              }}
            >
              Duncan,
            </div>
          </Row>
        </Col>
        <Col>{/* for spacing */}</Col>
      </Row>
    </Container>
  );
};

export default Header;
