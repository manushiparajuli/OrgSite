import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Calendar from "../Calendar";
import myImg from "../../Assets/Logo.jpg";
import Contact from "../Contact";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7}>
              <img src={myImg} className="profile-pic" alt="avatar" />
            </Col>
            <Col md={5} className="home-header">
              <h1 style={{ paddingBottom: 5 }}>
                Welcome To WeHack!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  🙋
                </span>{" "}
              </h1>
              </Col>
              </Row>
              <Row>
              <Col>
              <Calendar />
              </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
