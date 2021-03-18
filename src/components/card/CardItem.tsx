import React from "react";
import { Card } from "../../models/Types";
import "./CardItem.css";

type CardProps = Card;

const CardItem = (props: CardProps) => {
  const backgroundColor = props.color;
  const text = props.figure;
  const styles = { backgroundColor: backgroundColor };
  return (
    <div className="card">
      <div className="card__container" style={styles}>
        <span className="card__content">{text}</span>
      </div>
    </div>
  );
};

export default CardItem;
