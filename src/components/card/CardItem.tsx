import React from "react";
import { Card } from "../../models/Types";

type CardProps = Card;

const CardItem = (props: CardProps) => {
  const backgroundColor = props.color;
  const text = props.figure;
  return (
    <div className="card" style={{ backgroundColor: backgroundColor }}>
      {text}
    </div>
  );
};

export default CardItem;
