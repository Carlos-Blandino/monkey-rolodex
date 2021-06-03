import React from "react";
import "./card.style.css";

export const Card = ({ monkey }) => {
  return (
    <div className={"card-container"}>
      <h4>Today</h4>
      <h2>{monkey.name}</h2>
      <h4>Feels:</h4>
      <img
        alt="monkey"
        src={`https://github.com/Carlos-Blandino/monkey-rolodex/blob/main/src/components/card/images/${monkey.id}.jpg?raw=true`}
        width={"180px"}
      />
      <p>{monkey.email}</p>
    </div>
  );
};
