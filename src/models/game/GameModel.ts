import { getAllSettings } from "../storage/Storage";
import {
  AllSettings,
  Card,
  cardNumberKeyStorage,
  cardsTimesKeyStorage,
  defaultCardsNumber,
  defaultTimeoutTimes,
  Settings,
} from "../Types";

export function isGameEnd(cardsList: Card[]) {
  return cardsList.every((card) => card.isOpen === true);
}

export const showRule = (): string => {
  return `В начале игры будут показаны все карты. Через несколько секунд карты закроются. 
  Ваша задача открыть 2 одинаковые карты (у карт должен совпадать номер и цвет).
  За каждую угаданную пару будет начислять 1 бал. Если вы откроете разные пары, то 1 бал будет списан.
  Хорошей игры! `;
};

export const loadSettingsForGame = (): Settings => {
  const allSettings: Array<AllSettings> = getAllSettings([
    cardNumberKeyStorage,
    cardsTimesKeyStorage,
  ]);

  const mappedSettings: Settings = {} as Settings;
  allSettings.forEach((settingsObj) => {
    switch (settingsObj.keyStorage) {
      case cardNumberKeyStorage: {
        mappedSettings["cardNumber"] =
          +settingsObj.valueStorage || defaultCardsNumber;
        break;
      }
      case cardsTimesKeyStorage: {
        mappedSettings["cardTimes"] =
          +settingsObj.valueStorage || defaultTimeoutTimes;
        break;
      }
      default:
    }
  });

  return mappedSettings;
};
