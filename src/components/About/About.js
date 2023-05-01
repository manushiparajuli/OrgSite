import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
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
        <Row>
          <Col>

            <Button as={Link} to="/project" variant="primary" size="lg">
              My Content
            </Button>
            <Button as={Link} to="/team" variant="primary" size="lg">
              Settings
            </Button>
            <Button as={Link} to="/" variant="primary" size="lg">
Go Back
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
