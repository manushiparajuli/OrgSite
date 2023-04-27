import React from "react";

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
      </div>
    </div>
  );
}

export default Future;
