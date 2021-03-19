import { Card } from "../Types";

export function isGameEnd(cardsList: Card[]) {
  return cardsList.every((card) => card.isOpen === true);
}

export const showRule = (): string => {
  return `some rule`;
};
