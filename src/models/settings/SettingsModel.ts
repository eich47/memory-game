import { cardNumberKeyStorage, Settings } from "../Types";
import { getItem, setItem } from "../storage/Storage";

const defaultCardsNumber = 12;

export function loadingSettings(): Settings {
  const cardsNumber = getItem(cardNumberKeyStorage) || defaultCardsNumber;
  return {
    cardNumber: +cardsNumber,
  };
}

export function saveOption(key: string, value: string) {
  setItem(key, value);
}

export function isCorrectCardsNumberInput(cardsNumber: number): boolean {
  return !isNaN(cardsNumber);
}

export function isRangeNumberCorrect(cardNumber: number): boolean {
  return cardNumber > 1 && cardNumber < 19 && cardNumber % 2 === 0;
}
