import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import shortid from "shortid";

const grow = (stringHeight) => keyframes`
  from {
    height: 0px;
  }

  to {
    height: ${stringHeight}px;
  }
`;

const StackBars = styled.div`
  text-align: center;
  animation: ${(props) => grow(props.stringHeight)} 2s ease-in-out both;
  animation-iteration-count: 1;
  background-color: ${(props) => props.color};
`;

const StackGraph = ({ currentStacks, setHover }) => {
  let stacks = currentStacks;
  console.log(stacks);

  const getRandomKey = () => {
    return shortid.generate();
  };

  // const [beginAnimation, setBeginAnimation] = useState(false);
  // ? getting the animation to pause when it scrolls to it
  // useEffect(() => {
  //   const inViewport = (entries, observer) => {
  //     entries.forEach((entry) => {
  //       entry.target.classList.toggle("OutViewport", entry.isIntersecting);
  //     });
  //   };

  //   const Obs = new IntersectionObserver(inViewport);
  //   const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options

  //   // Attach observer to every [data-inviewport] element:
  //   const ELs_inViewport = document.querySelectorAll("stack-bars");
  //   ELs_inViewport.forEach((EL) => {
  //     Obs.observe(EL, obsOptions);
  //   });
  // }, []);

  return (
    <div>
      {stacks?.map((stack) => {
        return (
          <div
            key={getRandomKey()}
            id="full-chart-wrap"
            style={{
              marginTop: "3rem",
              display: "flex",
              height: "225px",
              justifyContent: "center",
              flexFlow: "row wrap",
            }}
          >
            <div
              id="stack-boxes"
              style={{
                position: "absolute",
                display: "flex",
                zIndex: "2",
                flexGrow: "1",
              }}
            >
              {stack?.skills?.map((s) => {
                const growHeight = 33 + 41 * (s.level - 1);

                const stringHeight = growHeight.toString();

                return (
                  <div
                    id="skillBox"
                    key={getRandomKey()}
                    style={{
                      position: "relative",
                      marginTop: "-20px",
                    }}
                    onMouseEnter={(e) => setHover(s.hoverDesc)}
                    // onMouseLeave={setHoverInfo("")}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        id="slanted words defining the skill"
                        style={{
                          transform: "rotate(-45deg)",
                          width: "80px",
                          marginBottom: "10px",
                          textDecoration: "underline",
                          textAlign: "center",
                        }}
                      >
                        {s.name}
                      </div>{" "}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {" "}
                      {/* {beginAnimation ? <></> : <></>} */}
                      <StackBars
                        id="stack-bars"
                        style={{
                          width: "10px",
                        }}
                        // color={s.color}
                        color={"white"}
                        stringHeight={stringHeight}
                      ></StackBars>
                    </div>{" "}
                  </div>
                );
              })}
              <div
                id="stack-backgroundRow-container"
                style={{
                  zIndex: "-1",
                  overflowX: "hidden",
                  marginTop: "1rem",
                  position: "absolute",
                  width: "100%",
                }}
              >
                <Row className="table-spacing">
                  <div className="background-bar" />
                  <div className="number-pos">1</div>
                </Row>
                <Row className="table-spacing">
                  <div className="background-bar" />
                  <div className="number-pos">2</div>
                </Row>
                <Row className="table-spacing">
                  <div className="background-bar" />
                  <div className="number-pos">3</div>
                </Row>
                <Row className="table-spacing">
                  <div className="background-bar" />
                  <div className="number-pos">4</div>
                </Row>
                <Row className="table-spacing">
                  <div className="background-bar" />
                  <div className="number-pos">5</div>
                </Row>
              </div>
            </div>

            {/* <div
            style={{
              marginTop: "230px",
              overflowWrap: "break-word",
              maxWidth: "500px",
            }}
          >
          </div> */}
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(StackGraph);
