import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export function StartGameButton() {
  const { startGame } = useContext(AppContext);
  return (
    <button className="button button_start" onClick={startGame}>
      Начать игру
    </button>
  );
}
