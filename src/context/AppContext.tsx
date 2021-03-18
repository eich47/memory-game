import * as React from "react";
import { createContext } from "react";
import {
  closeCards,
  generateCards,
  isCardsIsWon,
  openSelectedCard,
} from "../models/Card";
import { Card } from "../models/Types";

const startGame = () => {
  console.log("not implement start game function");
};

const stopGame = () => {
  console.log("not implement stop game function");
};

const openCard = (card: Card) => {
  console.log("not implement open card function");
};

export const AppContext = createContext({
  cards: [],
  gameState: false, //game is running
  startGame: startGame,
  stopGame: stopGame,
  openCard: openCard,
} as {
  cards: Card[];
  gameState: boolean;
  startGame: typeof startGame;
  stopGame: typeof stopGame;
  openCard: typeof openCard;
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [cards, setCards] = React.useState<Array<Card>>([]);

  const [gameState, setGameState] = React.useState(false);

  const [firstSelectedCard, setFirstSelectedCard] = React.useState<Card | null>(
    null
  );

  const [isProgress, setIsProgress] = React.useState(false);

  const startGame = () => {
    setGameState(true);
    const cards: Card[] = generateCards();
    setCards(cards);
  };

  const stopGame = () => {
    setGameState(false);
    setCards([]);
  };

  const openCard = (card: Card) => {
    if (isProgress) return;
    if (card.isOpen) return;

    if (firstSelectedCard === null) {
      setFirstSelectedCard(card);
      setCards(openSelectedCard(cards, card));
    } else {
      setIsProgress(true);
      setCards(openSelectedCard(cards, card));

      if (isCardsIsWon(firstSelectedCard, card)) {
        console.log("карты угаданы");
        setFirstSelectedCard(null);
        setIsProgress(false);
      } else {
        console.log("карты НЕ угаданы");
        setTimeout(() => {
          setCards(closeCards(cards, firstSelectedCard, card));
          setFirstSelectedCard(null);
          setIsProgress(false);
        }, 1500);
      }
    }
  };

  return (
    <AppContext.Provider
      value={{ cards, gameState, startGame, stopGame, openCard }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
