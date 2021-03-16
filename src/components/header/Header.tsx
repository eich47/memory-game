import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { StopGameButton } from "../buttons/StopGameButton";
import { StartGameButton } from "../buttons/StartGameButton";
import "./Header.css";

const Header = () => {
  const { gameState } = useContext(AppContext);
  return (
    <header className="header">
      {gameState ? <StopGameButton /> : <StartGameButton />}
    </header>
  );
};

export default Header;
