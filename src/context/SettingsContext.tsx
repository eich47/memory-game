import React, { createContext, useEffect } from "react";
import {
  isCorrectCardsNumberInput,
  isRangeNumberCorrect,
  isRangeTimesCorrect,
  loadingSettings,
  saveOption,
} from "../models/settings/SettingsModel";
import {
  Settings,
  cardNumberKeyStorage,
  cardsTimesKeyStorage,
} from "../models/Types";

const handleChangeCarsNumber = (carsNumber: number) => {
  console.log("not implement change cars number function");
};

const handlerChangeTimeoutCards = (times: number) => {
  console.log("not implement change timeout cards function");
};

export const SettingsContext = createContext({
  //count of cards
  cardsNumber: 12,
  messageCarsNumberError: null,
  handleChangeCarsNumber: handleChangeCarsNumber,
  successMessage: "",
  //timeout cards
  timeoutCars: 3,
  handlerChangeTimeoutCards: handlerChangeTimeoutCards,
  cardsTimesErrorMessage: null,
} as {
  cardsNumber: number;
  messageCarsNumberError: string | null;
  handleChangeCarsNumber: typeof handleChangeCarsNumber;
  successMessage: string;
  timeoutCars: number;
  handlerChangeTimeoutCards: typeof handlerChangeTimeoutCards;
  cardsTimesErrorMessage: string | null;
});

const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [cardsNumber, setCardNumber] = React.useState<number>(0);
  const [messageCarsNumberError, setMessageCarsNumberError] = React.useState<
    string | null
  >(null);

  const [successMessage, setSuccessMessage] = React.useState<string>("");
  const [times, setTimes] = React.useState<number>(1);
  const [cardsTimesErrorMessage, setCardsTimesErrorMessage] = React.useState<
    string | null
  >(null);

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
    setTimes(settings.cardTimes);
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

  const handlerChangeTimeoutCards = (times: number) => {
    if (!isCorrectCardsNumberInput(times)) {
      setCardsTimesErrorMessage("Введите корректные данные");
      setSuccessMessage("");
      return;
    }

    if (!isRangeTimesCorrect(times)) {
      setCardsTimesErrorMessage("Введите число от 1 до 10");
      setTimes(times);
      setSuccessMessage("");
      return;
    }

    setTimes(times);
    setMessageCarsNumberError(null);
    saveOption(cardsTimesKeyStorage, times.toString());
    setSuccessMessage("настройки сохранены");
  };

  return (
    <SettingsContext.Provider
      value={{
        cardsNumber,
        handleChangeCarsNumber,
        messageCarsNumberError,
        successMessage,
        timeoutCars: times,
        handlerChangeTimeoutCards,
        cardsTimesErrorMessage,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
