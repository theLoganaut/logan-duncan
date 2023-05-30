import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "../Styles/SmallFeature.css";

const Header = () => {
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 500) {
      setCollapse(false);
    }
  }, []);

  return (
    <Navbar
      expanded={collapse}
      onSelect={() => setCollapse(false)}
      expand="lg"
      style={{ marginBottom: "10%" }}
    >
      <Container style={{ color: "white" }}>
        <Navbar.Brand
          href="/#top"
          style={{
            fontSize: "7vmin",
            marginLeft: "7%",
            color: "white",
          }}
        >
          <span
            style={{
              fontSize: "2.5vmin",
              marginRight: "2%",
              color: "white",
            }}
          >
            Hi, I'm
          </span>
          Logan
        </Navbar.Brand>
        <Navbar.Brand
          href="/#top"
          style={{
            fontFamily: "pixelFont",
            position: "absolute",
            fontSize: "7vmin",
            marginTop: collapse ? "57vmin" : "15vmin",
            marginLeft: "9%",
            color: "white",
          }}
        >
          Duncan,
        </Navbar.Brand>
        <Navbar.Toggle
          style={{ color: "white", backgroundColor: "white" }}
          onClick={() => setCollapse((collapse) => !collapse)}
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ backgroundColor: collapse ? "#30153c" : "" }}
        >
          <Nav className="me-4">
            <Nav.Link disabled style={{ color: "white", fontSize: "2vmin" }}>
              logan.duncan512@gmail.com
            </Nav.Link>
            <Nav.Link
              href="https://github.com/theLoganaut"
              style={{
                color: "white",
                position: "absolute",
                marginTop: collapse ? "6%" : "2%",
                // marginBottom: collapse ? "6%" : "",
                fontSize: "2vmin",
              }}
            >
              Github
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              href="/#top"
              className="lightLink"
              style={{
                marginTop: collapse ? "4%" : "",
              }}
            >
              Top
            </Nav.Link>
            <Nav.Link href="/#aboutme" className="lightLink">
              About Me
            </Nav.Link>
            <Nav.Link href="/#projects" className="lightLink">
              Projects
            </Nav.Link>
            <Nav.Link href="/#stacks" className="lightLink">
              Stacks
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
