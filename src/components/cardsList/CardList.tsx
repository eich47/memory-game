import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Card } from "../../models/Types";
import CardItem from "../card/CardItem";
import "./CardList.css";

const CardList = () => {
  const { cards, openCard } = useContext(AppContext);

  const listFromCards = cards.map((card, i) => {
    return (
      <CardItem
        onClick={openCard}
        key={cards.length - i}
        card={card}
        isOpenClass={card.isOpen ? "card__open" : ""}
      />
    );
  });
  return <div className="cards-list">{listFromCards}</div>;
};

export default CardList;
