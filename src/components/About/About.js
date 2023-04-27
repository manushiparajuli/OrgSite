import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home from "../../Assets/Home.png";


function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">Snapster</strong>
            </h1>
            <img src={Home} className="Image1" alt=" Picture" />
</Col>
</Row>


      </Container>
    </Container>
  );
}

export default About;