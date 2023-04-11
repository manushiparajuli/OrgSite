import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { PROJECTS } from "../../Constants";
import Future from "../Future";


function Projects() {
  return (
    <div className="section" id="projects">
              <h2 >Projects</h2>

      <Container>
        <h2 style={{ paddingTop: 30 }}>Projects</h2>
        <Row className="justify-content-center">
          {PROJECTS.map((project, index) => (
            <Col lg={6} md={9} key={index}>
              <ProjectCard
                imgPath={project.image}
                technologyUsed={project.technologyUsed}
                isBlog={false}
                title={project.name}
                description={project.description}
                link={project.url}
              />
            </Col>
          ))}
          <Future/>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
