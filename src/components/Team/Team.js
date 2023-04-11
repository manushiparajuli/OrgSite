import React from "react";
import exec1 from "../../Assets/Manushi.jpg";
import exec2 from "../../Assets/Sambridee.jpg";
import exec3 from "../../Assets/Yogi.jpeg";
import exec4 from "../../Assets/Yogi.jpeg";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import Advisor1 from "../../Assets/Advisor1.jpg";


function Team() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container fluid>
      <div style={{ marginTop: '100px' }}> 
      <h1>Meet Our Team</h1>          
      <Row className="mt-3 team-row">
        {[
          {
            name: "Manushi Parajuli",
            position: "President",
            photoUrl: exec1,
          },
          {
            name: "Sambridee Mahat",
            position: "Vice President",
            photoUrl: exec2,
          },
          {
            name: "Nishanth Goud",
            position: "Technology Officer",
            photoUrl: "#",
            Intro: "Hi",
          },
          {
            name: "Yogi Dalge",
            position: "Tresurer",
            photoUrl: exec4,
          },
        ].map((member, index) => (
          <Col key={index} sm={6} md={3}>
            <Card className="team-card">
              <Card.Img variant="top" src={member.photoUrl} />
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{member.position}</Card.Subtitle>
                <Card.Subtitle className="Intro">{member.Intro}</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="team-row">
        {[
          {
            name: "Prof. Curtis Chambers",
            position: "Advisor",
            photoUrl: Advisor1,
          },
        ].map((member, index) => (
          <Col key={index} sm={6} md={3}>
            <Card className="team-card">
              <Card.Img variant="top" src={member.photoUrl} />
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{member.position}</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </div>
    </Container>
  );
}

export default Team;
