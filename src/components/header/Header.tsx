import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { StopGameButton } from "../buttons/StopGameButton";
import { StartGameButton } from "../buttons/StartGameButton";
import "./Header.css";
import Score from "../score/Score";
import ToggleMenu from "../buttons/ToggleMenu";
import SettingsProvider from "../../context/SettingsContext";
import Settings from "../settings/Settings";

const Header = () => {
  const { gameState, isOpenMenu, toggleMenu } = useContext(AppContext);
  return (
    <header className="header">
      {gameState ? <StopGameButton /> : <StartGameButton />}
      <Score />
      <ToggleMenu isOpenMenu={isOpenMenu} handlerClick={toggleMenu} />

      {isOpenMenu && (
        <SettingsProvider>
          <Settings />
        </SettingsProvider>
      )}
    </header>
  );
};

export default Header;
