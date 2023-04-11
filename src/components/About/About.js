import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ResumePic from "../../Assets/Projects/ResumePic.png";
import Interview from "../../Assets/Projects/Interview.png";
import Conference from "../../Assets/Projects/Conference.png";
import Hackathons from "../../Assets/Projects/Hackathons.png";

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
              <strong className="purple">WeHack</strong>
            </h1>
            <h4 className="purple">Mission</h4>
            <p>
              Our primary goal is to simplify the concepts of Computer Science
              with the collaboration of CS students and faculty. WeHack finds
              means to take students (especially minorities) to participate in
              conferences and hackathons.
            </p>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col md={8}
        style={{
          justifyContent: "right",
          paddingTop: "30px",
          paddingBottom: "50px",
        }}>
  <Row>
    <Col>
      <img src={ResumePic} className="Image1" alt="Resume Picture" />
    </Col>
    <Col>
      <img src={Interview} className="Image1" alt="Interview Picture" />
    </Col>
    <Col>
      <img src={Conference} className="Image1" alt="Conference Picture" />
    </Col>
      <img src={Hackathons} className="Image1" alt="Hackathons Picture" />
  </Row>
</Col>
</Row>


      </Container>
    </Container>
  );
}

export default About;
