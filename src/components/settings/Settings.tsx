import React, { useContext } from "react";
import { SettingsContext } from "../../context/SettingsContext";
import CardNumber from "./cards-number/CardNumber";
import "./Settings.css";

const Settings = () => {
  const {
    cardsNumber,
    handleChangeCarsNumber,
    messageCarsNumberError,
  } = useContext(SettingsContext);
  return (
    <div className="settings">
      <span className="settings__title">Настройки</span>
      <CardNumber
        cardsNumber={cardsNumber}
        onChangeCarsNumber={handleChangeCarsNumber}
        errorMessage={messageCarsNumberError}
      />
    </div>
  );
};

export default Settings;
