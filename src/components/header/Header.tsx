import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { RestartGameButton } from "../buttons/RestartGameButton";
import { StartGameButton } from "../buttons/StartGameButton";

const Header = () => {
  const { gameState } = useContext(AppContext);
  return (
    <header className="header">
      {gameState ? <RestartGameButton /> : <StartGameButton />}
    </header>
  );
};

export default Header;
