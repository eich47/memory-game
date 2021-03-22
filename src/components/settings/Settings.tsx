import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { SettingsContext } from "../../context/SettingsContext";
import ToggleMenu from "../buttons/ToggleMenu";
import CardNumber from "./cards-number/CardNumber";
import "./Settings.css";

const Settings = () => {
  const {
    cardsNumber,
    handleChangeCarsNumber,
    messageCarsNumberError,
  } = useContext(SettingsContext);

  const { isOpenMenu, toggleMenu } = useContext(AppContext);
  return (
    <div className="settings">
      <div className="settings__container">
        <span className="settings__title">Настройки</span>
        <ToggleMenu isOpenMenu={isOpenMenu} handlerClick={toggleMenu} />
      </div>

      <CardNumber
        cardsNumber={cardsNumber}
        onChangeCarsNumber={handleChangeCarsNumber}
        errorMessage={messageCarsNumberError}
      />
    </div>
  );
};

export default Settings;
