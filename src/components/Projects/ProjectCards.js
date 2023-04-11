import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";


function ProjectCard(props) {
  return (
    <Card className="project-card">
      <div className="project-image-container">
        
        <Card.Img className="project-image" variant="top" src={props.imgPath} alt="project-image" />
      </div>
      <Card.Body className="project-body">
        <Card.Title className="project-title">{props.title}</Card.Title>
        <Card.Text className="project-tech">{props.technologyUsed}</Card.Text>
        <Card.Text className="project-description">{props.description}</Card.Text>
        <Button 
          variant="outline-primary" 
          href={props.link} 
          target="_blank"
          className="view-button"
          style={{ 
            backgroundColor: "Black",
            borderColor: "#007bff",
            borderRadius: "25px",
            fontWeight: "bold",
            textTransform: "uppercase",
            margin: "20px 0 10px 0",
            padding: "10px 20px",
            transition: "all 0.3s ease-in-out"
          }}
        >
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Project"}
        </Button>
      </Card.Body>
    </Card>
    
  );
}

export default ProjectCard;
