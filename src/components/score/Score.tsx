import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import "./Score.css";

const Score = () => {
  const { score } = useContext(AppContext);
  return (
    <div className="score">
      <span className="score__text">Счет: </span>
      <span className="score__value">{score}</span>
    </div>
  );
};

export default Score;
