import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Calendar from "../Calendar";
import myImg from "../../Assets/snapster.png";
import Img from "../../Assets/Login.png";
import { Link } from "react-router-dom";


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
                Welcome to snapster{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  🙋
                </span>{" "}
                <img src={Img} className="profile-pic" alt="avatar" />   
              </h1>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button as={Link} to="/team" variant="primary" size="lg">
              Login
            </Button>
                  <Button variant="success" href="/signup">
                    Sign up
                  </Button>
              </Form>
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
