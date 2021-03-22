import { getAllSettings } from "../storage/Storage";
import {
  AllSettings,
  Card,
  cardNumberKeyStorage,
  defaultCardsNumber,
  Settings,
} from "../Types";

export function isGameEnd(cardsList: Card[]) {
  return cardsList.every((card) => card.isOpen === true);
}

export const showRule = (): string => {
  return `some rule`;
};

export const loadSettingsForGame = (): Settings => {
  const allSettings: Array<AllSettings> = getAllSettings([
    cardNumberKeyStorage,
  ]);

  const mappedSettings: Settings = {} as Settings;
  allSettings.forEach((settingsObj) => {
    switch (settingsObj.keyStorage) {
      case cardNumberKeyStorage: {
        mappedSettings["cardNumber"] =
          +settingsObj.valueStorage || defaultCardsNumber;
        break;
      }
      default:
    }
  });

  return mappedSettings;
};
