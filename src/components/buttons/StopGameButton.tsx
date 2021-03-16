import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export function StopGameButton() {
  const { stopGame } = useContext(AppContext);
  return (
    <button className="button button_restart" onClick={stopGame}>
      Остановить игру
    </button>
  );
}
