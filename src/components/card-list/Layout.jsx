import React from "react";
import "./card-list.style.css";
import { Card } from "../card/Card";

export const Layout = ({ monkeys }) => {
  return (
    <div className="card-list">
      {monkeys.map((monkey) => (
        <Card key={monkey.id} monkey={monkey} />
      ))}
    </div>
  );
};
