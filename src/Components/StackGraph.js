import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import styled, { keyframes } from "styled-components";

const StackGraph = ({ currentStacks, setHover }) => {
  let stacks = currentStacks;
  console.log(stacks);

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   };
  // }, [input]);

  return (
    <div>
      {stacks?.map((stack, key) => {
        return (
          <div
            key={key}
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
              {stack.skills.map((s, key) => {
                //   const growHeight = 33 + 41 * (s.level - 1);

                //   const stringHeight = growHeight.toString();

                //   const grow = keyframes`
                //   from {
                //     height: 0px;
                //   }

                //   to {
                //     height: ${stringHeight}px;
                //   }
                // `;

                //   const GraphBar = styled.div`
                //     text-align: center;
                //     animation: ${grow} 1.2s ease-in-out both;
                //     animation-iteration-count: 1;
                //   `;

                return (
                  <div
                    id="skillBox"
                    key={key}
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
                      <div
                        id="skill box grows to meet the row"
                        style={{
                          border: "1px solid",
                          // 1 = 33, 2 = 74 3 = 115, so its y = 33 + 41(x)
                          // maxHeight: `calc(33px + 41px * ${
                          //   s.level - 1
                          // })`,
                          // animation: `${grow} 1.2s ease-in-out forwards`,
                          width: "10px",
                        }}
                      ></div>
                    </div>{" "}
                  </div>
                );
              })}
              <div
                id="stack-backgroundRow-container"
                style={{
                  zIndex: "1",
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
