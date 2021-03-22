export interface Card {
  figure: string;
  color: string;
  isOpen: boolean; //if user click on the card it will be open
}

export interface Colors {
  [key: string]: string;
}

export interface Settings {
  cardNumber: number;
  cardTimes: number;
}

//key in the localStorage

export const cardNumberKeyStorage = "card-number";
export const cardsTimesKeyStorage = "card-times";

//all settings from storage
export interface AllSettings {
  keyStorage: string;
  valueStorage: string;
}

//settings

export const defaultCardsNumber = 12;
export const defaultTimeoutTimes = 3;
