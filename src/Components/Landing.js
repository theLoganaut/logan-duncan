import { Container, Row, Col } from "react-bootstrap";
import LunarPhases from "./LunarPhases";

const Landing = () => {
  // ? keeping this here for possible future use? maybe ineffecient tho
  // const [windowOffest, setWindowOffest] = useState(0);

  // useEffect(() => {
  //   let topDist =
  //     window.pageYOffset +
  //     document.getElementById("landing").getBoundingClientRect().top;
  //   setWindowOffest(topDist);
  // }, []);

  return (
    <Container
      style={{
        height: `100vh`,
        // marginTop: `${windowOffest}px`,
      }}
    >
      <Row>
        <Col>
          <Row style={{ marginTop: "" }}>
            <div
              style={{
                textAlign: "center",
                fontSize: "18px",
              }}
            >
              a self-taught developer with a knack for designing and a love of
              space.
            </div>
            <div style={{ textAlign: "center", fontSize: "18px" }}>
              Please enjoy this visualization of the moon as it reaches its
              current phase.
            </div>

            <div
              style={{
                display: "flex",
                width: "100%",
                margin: "auto",
                marginTop: "1rem",
                justifyContent: "center",
              }}
            >
              <LunarPhases />
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
