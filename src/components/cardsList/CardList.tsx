import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import CardItem from "../card/CardItem";
import "./CardList.css";

const CardList = () => {
  const { cards } = useContext(AppContext);

  const listFromCards = cards.map((card, i) => {
    return <CardItem key={cards.length - i} {...card} />;
  });
  return <div className="cards-list">{listFromCards}</div>;
};

export default CardList;
