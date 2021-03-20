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
} as {
  cardsNumber: number;
  messageCarsNumberError: string | null;
  handleChangeCarsNumber: typeof handleChangeCarsNumber;
});

const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [cardsNumber, setCardNumber] = React.useState<number>(0);
  const [messageCarsNumberError, setMessageCarsNumberError] = React.useState<
    string | null
  >(null);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = (): void => {
    const settings: Settings = loadingSettings();
    setCardNumber(settings.cardNumber);
  };

  const handleChangeCarsNumber = (cardsNumberInput: number) => {
    if (!isCorrectCardsNumberInput(cardsNumberInput)) {
      setMessageCarsNumberError("Введите корректные данные");
      return;
    }

    setCardNumber(cardsNumberInput);

    if (!isRangeNumberCorrect(cardsNumberInput)) {
      setMessageCarsNumberError("Введите четное число от 2 до 18");
      setCardNumber(cardsNumberInput);
      return;
    }

    setCardNumber(cardsNumberInput);
    setMessageCarsNumberError(null);
    saveOption(cardNumberKeyStorage, cardsNumberInput.toString());
  };

  return (
    <SettingsContext.Provider
      value={{ cardsNumber, handleChangeCarsNumber, messageCarsNumberError }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
