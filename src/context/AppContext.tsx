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

export const AppContext = createContext({
  cards: [],
  gameState: false, //game is running
  startGame: startGame,
  stopGame: stopGame,
} as {
  cards: {
    figure: string;
    color: string;
  }[];
  gameState: boolean;
  startGame: typeof startGame;
  stopGame: typeof stopGame;
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

  return (
    <AppContext.Provider value={{ cards, gameState, startGame, stopGame }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
