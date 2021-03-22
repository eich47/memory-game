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
      <div className="wrapper">
        <div className="header__container">
          <div className="header__title">Угадай пару</div>
          <div className="header__column1">
            {gameState ? <StopGameButton /> : <StartGameButton />}
          </div>
          <div className="header__column2">
            <Score />
          </div>
          <div className="header__column3">
            <ToggleMenu isOpenMenu={isOpenMenu} handlerClick={toggleMenu} />
          </div>
          {isOpenMenu && (
            <SettingsProvider>
              <Settings />
            </SettingsProvider>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
