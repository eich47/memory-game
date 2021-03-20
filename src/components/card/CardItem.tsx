import React from "react";
import { Card } from "../../models/Types";
import "./CardItem.css";

type CardProps = { card: Card } & { onClick: (card: Card) => void } & {
  isOpenClass: string;
};

const CardItem = (props: CardProps) => {
  const card = props.card;
  const backgroundColor = card.color;
  const text = card.figure;
  const styles = { backgroundColor: backgroundColor };
  const isOpenClass = props.isOpenClass;

  const handleClick = () => {
    props.onClick(card);
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className={`card__container ${isOpenClass}`}>
        <div className="card__box-front"></div>
        <div className="card__box-back" style={styles}>
          <span className="card__content">{text}</span>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
