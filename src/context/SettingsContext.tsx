import React, { createContext, useEffect } from "react";
import {
  isCorrectCardsNumberInput,
  isRangeNumberCorrect,
  loadingSettings,
  saveOption,
} from "../models/settings/SettingsModel";
import { Settings, cardNumberKeyStorage } from "../models/Types";

const handleChangeCarsNumber = (carsNumber: number) => {
  console.log("not implement change cars number function");
};

export const SettingsContext = createContext({
  cardsNumber: 12,
  messageCarsNumberError: null,
  handleChangeCarsNumber: handleChangeCarsNumber,
  successMessage: "",
} as {
  cardsNumber: number;
  messageCarsNumberError: string | null;
  handleChangeCarsNumber: typeof handleChangeCarsNumber;
  successMessage: string;
});

const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [cardsNumber, setCardNumber] = React.useState<number>(0);
  const [messageCarsNumberError, setMessageCarsNumberError] = React.useState<
    string | null
  >(null);

  const [successMessage, setSuccessMessage] = React.useState<string>("");

  useEffect(() => {
    loadSettings();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setSuccessMessage("");
    }, 1000);
  }, [successMessage]);

  const loadSettings = (): void => {
    const settings: Settings = loadingSettings();
    setCardNumber(settings.cardNumber);
  };

  const handleChangeCarsNumber = (cardsNumberInput: number) => {
    if (!isCorrectCardsNumberInput(cardsNumberInput)) {
      setMessageCarsNumberError("Введите корректные данные");
      setSuccessMessage("");
      return;
    }

    setCardNumber(cardsNumberInput);

    if (!isRangeNumberCorrect(cardsNumberInput)) {
      setMessageCarsNumberError("Введите четное число от 2 до 18");
      setCardNumber(cardsNumberInput);
      setSuccessMessage("");
      return;
    }

    setCardNumber(cardsNumberInput);
    setMessageCarsNumberError(null);
    saveOption(cardNumberKeyStorage, cardsNumberInput.toString());
    setSuccessMessage("настройки сохранены");
  };

  return (
    <SettingsContext.Provider
      value={{
        cardsNumber,
        handleChangeCarsNumber,
        messageCarsNumberError,
        successMessage,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
