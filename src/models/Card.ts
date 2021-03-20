import { colors } from "./constants";
import { Card } from "./Types";

export function generateCards(numberCard = 16): Card[] {
  const res: Card[] = [];
  const pairCount = numberCard / 2;
  let count = 1;

  while (count <= pairCount) {
    const ind = `COLOR${count}`;
    const obj: Card = {
      figure: count + "",
      color: `${colors[ind]}`,
      isOpen: false,
    };
    res.push(Object.assign({}, obj));
    res.push(Object.assign({}, obj));
    count++;
  }

  return sortCards(res);
}

const sortCards = (arrCars: Array<Card>) => {
  return arrCars.sort(() => Math.random() - 0.5);
};

export function openSelectedCard(
  cardsList: Card[],
  selectedCard: Card
): Card[] {
  return cardsList.map((c) => {
    if (c === selectedCard) {
      c.isOpen = true;
    }
    return c;
  });
}

export function closeCards(
  cardsList: Array<Card>,
  oneOpenCard: Card,
  secondOpenCard: Card
): Card[] {
  return cardsList.map((c) => {
    if (c === oneOpenCard || c === secondOpenCard) {
      c.isOpen = false;
    }
    return c;
  });
}

export function isCardsIsWon(oneCard: Card, secondCard: Card): boolean {
  return (
    oneCard.figure === secondCard.figure && oneCard.color === secondCard.color
  );
}

export function openAllCards(cards: Card[]): Card[] {
  return cards.map((card) => {
    card.isOpen = true;
    return card;
  });
}

export function closeAllCards(cards: Card[]): Card[] {
  return cards.map((card) => {
    card.isOpen = false;
    return card;
  });
}
