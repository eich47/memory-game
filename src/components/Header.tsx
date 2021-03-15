import React from "react";
import { RestartGameButton } from "./RestartGameButton";
import { StartGameButton } from "./StartGameButton";

const Header = () => {
  return (
    <header className="header">
      <StartGameButton />
      <RestartGameButton />
    </header>
  );
};

export default Header;
