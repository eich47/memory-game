import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export function RestartGameButton() {
  const { stopGame } = useContext(AppContext);
  return (
    <button className="button button_restart" onClick={stopGame}>
      Начать заново
    </button>
  );
}
