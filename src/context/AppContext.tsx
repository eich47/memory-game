import * as React from "react";
import { createContext } from "react";

const startGame = () => {
  console.log("not implement start game function");
};

const stopGame = () => {
  console.log("not implement stop game function");
};

export interface Card {
  figure: string;
  color: string;
}

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
  const [cards, setCards] = React.useState([
    { figure: "square", color: "green" },
  ]);

  const [gameState, setGameState] = React.useState(false);

  const startGame = () => {
    setGameState(true);
  };

  const stopGame = () => {
    setGameState(false);
  };

  return (
    <AppContext.Provider value={{ cards, gameState, startGame, stopGame }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
