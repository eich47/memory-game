import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { SettingsContext } from "../../context/SettingsContext";
import ToggleMenu from "../buttons/ToggleMenu";
import Info from "../info/Info";
import CardNumber from "./cards-number/CardNumber";
import "./Settings.css";

const Settings = () => {
  const {
    cardsNumber,
    handleChangeCarsNumber,
    messageCarsNumberError,
    successMessage,
  } = useContext(SettingsContext);

  const { isOpenMenu, toggleMenu } = useContext(AppContext);
  return (
    <div className="settings">
      <div className="settings__container">
        <span className="settings__title">Настройки</span>
        <ToggleMenu isOpenMenu={isOpenMenu} handlerClick={toggleMenu} />
      </div>
      <div className="settings__container2">
        <Info text={successMessage} />
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
