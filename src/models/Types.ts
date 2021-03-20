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
}

//key in the localStorage

export const cardNumberKeyStorage = "card-number";
