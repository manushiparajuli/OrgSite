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
                        • Volunteer work at local shelter\n
                        • Fundraiser event for charity\n
                        • Networking event with industry professionals\n
                        • Workshop on effective communication\n
                        • Team building activity\n
                        • Social media marketing strategy session\n
                        • Industry expert guest speaker\n
                        • Panel discussion on current industry trends\n`}
        />
      </div>
    </div>
  );
}

export default Future;
