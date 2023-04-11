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
          title="Upcoming Event"
          description={`Upcoming events include:\n
                        • General Meeting\n
                        • Collaborate with different departments to create YouTube video\n
                        `}
        />
      </div>
    </div>
  );
}

export default Future;
