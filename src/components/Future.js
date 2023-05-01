import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";



function Card({title, description}) {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

function Future() {
  return (
    <div>
      <div>
        <Card 
          title="Upload/Download Content"
          
        />
        
        <Button as={Link} to="/about" variant="primary" size="lg">
Go Back
            </Button>
      </div>
    </div>
  );
}

export default Future;
