import * as React from "react";
import { createContext } from "react";
import { generateCards } from "../models/Card";
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
    const updatedCards = cards.map((c) => {
      if (c === card) {
        c.isOpen = true;
      }
      return c;
    });
    setCards(updatedCards);
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
