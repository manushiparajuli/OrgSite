import React from "react";
import { Container, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <Container>
      <h1>Contact Us</h1>
      <Form method="post" action="mailto:manusi.parajuli@gmail.com">
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" />
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} name="message" />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default Contact;
