import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "../Styles/SmallFeature.css";

const Header = () => {
  const [collapse, setCollapse] = useState(false);

  const scrollTo = () => {
    setTimeout(() => {
      setCollapse((collapse) => !collapse);
    }, 150);
    Window.scrollBy(0, 500);
  };

  return (
    <Navbar expanded={collapse} expand="lg" style={{ marginBottom: "10%" }}>
      <Container style={{ color: "white" }}>
        <Navbar.Brand
          href="/#landing"
          style={{
            fontSize: "10vmin",
            marginLeft: "7%",
            color: "white",
          }}
        >
          <span
            style={{
              fontSize: "4vmin",
              marginRight: "2%",
              color: "white",
            }}
          >
            Hi, I'm
          </span>
          Logan
        </Navbar.Brand>
        <Navbar.Brand
          href="/#landing"
          style={{
            position: "absolute",
            fontSize: "7vmin",
            marginTop: collapse ? "calc(50vmax - 17vmax)" : "15vmin",
            marginLeft: "9%",
            color: "white",
          }}
        >
          Duncan,
        </Navbar.Brand>
        <Navbar.Toggle
          style={{ color: "white", backgroundColor: "white" }}
          // onClick={() =>
          //   setTimeout(() => {
          //     setCollapse((collapse) => !collapse);
          //   }, 150)
          // }
          onClick={scrollTo}
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ backgroundColor: collapse ? "#30153c" : "" }}
        >
          <Nav className="me-4" style={{ marginTop: "-1em" }}>
            <Nav.Link
              disabled
              style={{
                color: "white",
                fontSize: "calc(10px + 1vw)",
                marginTop: "-1%",
              }}
            >
              logan.duncan512@gmail.com{" "}
              {/* <span>
                {" "}
                <a
                  style={{ textDecoration: "underline" }}
                  href="https://github.com/theLoganaut/motivate.me"
                >
                  Github
                </a>
              </span> */}
            </Nav.Link>
            <Nav.Link
              href="https://github.com/theLoganaut"
              style={{
                color: "white",
                position: "absolute",
                marginTop: collapse ? "calc(2vmax + 1vmax)" : "2%",
                // marginBottom: collapse ? "6%" : "",
                // fontSize: collapse ? "2vmin" : "2vmin",
                fontSize: "calc(10px + 1vw)",
              }}
            >
              Github
            </Nav.Link>
          </Nav>
          <Nav
            style={{
              marginTop: collapse ? "4%" : "",
            }}
          >
            <Nav.Link
              href="#landing"
              className="lightLink"
              style={
                {
                  // marginTop: collapse ? "4%" : "",
                }
              }
              onClick={() =>
                setTimeout(() => {
                  setCollapse((collapse) => !collapse);
                }, 350)
              }
            >
              Top
            </Nav.Link>
            <Nav.Link
              onClick={() =>
                setTimeout(() => {
                  setCollapse((collapse) => !collapse);
                }, 350)
              }
              href="#aboutme"
              className="lightLink"
            >
              About Me
            </Nav.Link>
            <Nav.Link
              onClick={() =>
                setTimeout(() => {
                  setCollapse((collapse) => !collapse);
                }, 350)
              }
              href="#projects"
              className="lightLink"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              onClick={() =>
                setTimeout(() => {
                  setCollapse((collapse) => !collapse);
                }, 350)
              }
              href="#stacks"
              className="lightLink"
            >
              Stacks
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
