import React from "react";
import { RestartGameButton } from "../buttons/RestartGameButton";
import { StartGameButton } from "../buttons/StartGameButton";

const Header = () => {
  return (
    <header className="header">
      <StartGameButton />
      <RestartGameButton />
    </header>
  );
};

export default Header;
