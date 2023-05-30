import React from "react";
import { Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import shortid from "shortid";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const StackGraph = ({ currentStacks }) => {
  let stacks = currentStacks;
  console.log(stacks);

  const getRandomKey = () => {
    return shortid.generate();
  };

  // ? maybe carousel for larger stack table
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //     slidesToSlide: 3, // optional, default to 1.
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //     slidesToSlide: 2, // optional, default to 1.
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  // };

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
            // maxWidth: "80%",
            display: "flex",
            zIndex: "2",
            flexGrow: "1",
            // overflowX: "scroll",
            // overflowY: "visible",
            // paddingBottom: "17px",
          }}
        >
          {stacks?.skills?.map((s) => {
            const growHeight = 33 + 41 * (s.level - 1);

            const stringHeight = growHeight.toString();

            return (
              <OverlayTrigger
                key={getRandomKey()}
                placement={"bottom"}
                overlay={
                  <Tooltip id={`tooltip-${getRandomKey()}`}>
                    {s.hoverDesc}
                  </Tooltip>
                }
              >
                {({ ref, ...triggerHandler }) => (
                  // <Button
                  //   variant="light"
                  //   {...triggerHandler}
                  //   className="d-inline-flex align-items-center"
                  // >
                  //   <Image
                  //     ref={ref}
                  //     roundedCircle
                  //     src="holder.js/20x20?text=J&bg=28a745&fg=FFF"
                  //   />
                  <div
                    id="skillBox"
                    // key={getRandomKey()}
                    style={{
                      position: "relative",
                      marginTop: "-20px",
                    }}
                    {...triggerHandler}
                    // onMouseEnter={(e) => setHover(s.hoverDesc)}
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
                        ref={ref}
                        style={{
                          transform: "rotate(-45deg)",
                          // width: "80px",
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
                )}
              </OverlayTrigger>
            );
          })}
          <div
            id="stack-backgroundRow-container"
            style={{
              zIndex: "-1",
              overflowX: "hidden",
              marginTop: "1rem",
              marginLeft: "2%",
              position: "absolute",
              width: "90%",
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
      </div>
    </div>
  );
};

export default React.memo(StackGraph);
