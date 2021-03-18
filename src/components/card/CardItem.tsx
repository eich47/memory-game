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
      <div className="card__container">
        <div className="card__box-front">front of card</div>
        <div className="card__box-back" style={styles}>
          <span className="card__content">{text}</span>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
