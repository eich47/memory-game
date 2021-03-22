import * as React from "react";
import { createContext } from "react";
import {
  closeAllCards,
  closeCards,
  generateCards,
  isCardsIsWon,
  openAllCards,
  openSelectedCard,
} from "../models/Card";
import { isGameEnd, loadSettingsForGame } from "../models/game/GameModel";
import {
  decreaseScore,
  increaseScore,
  resetScore,
} from "../models/score/ScoreModel";
import {
  Card,
  defaultCardsNumber,
  defaultTimeoutTimes,
  Settings,
} from "../models/Types";

const startGame = () => {
  console.log("not implement start game function");
};

const stopGame = () => {
  console.log("not implement stop game function");
};

const openCard = (card: Card) => {
  console.log("not implement open card function");
};

const toggleMenu = () => {
  console.log("not implement toggle menu function");
};

export const AppContext = createContext({
  cards: [],
  score: 0,
  gameState: false, //game is running
  startGame: startGame,
  stopGame: stopGame,
  openCard: openCard,
  isProgress: false,
  isOpenMenu: false,
  toggleMenu: toggleMenu,
} as {
  cards: Card[];
  score: number | null;
  gameState: boolean;
  startGame: typeof startGame;
  stopGame: typeof stopGame;
  openCard: typeof openCard;
  isProgress: boolean;
  isOpenMenu: boolean;
  toggleMenu: typeof toggleMenu;
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [cards, setCards] = React.useState<Array<Card>>([]);

  const [gameState, setGameState] = React.useState(false);

  const [firstSelectedCard, setFirstSelectedCard] = React.useState<Card | null>(
    null
  );

  const [isProgress, setIsProgress] = React.useState(false);

  const [score, setScore] = React.useState<number | null>(null);

  const [isOpenMenu, setIsOpenMenu] = React.useState<boolean>(false);

  const startGame = () => {
    const settings: Settings = loadSettingsForGame();
    setGameState(true);
    const {
      cardNumber = defaultCardsNumber,
      cardTimes = defaultTimeoutTimes,
    } = settings;
    const cards: Card[] = generateCards(cardNumber);
    const openedCards = openAllCards(cards);
    setCards(openedCards);
    const timeOpenCards = cardTimes * 1000;
    console.log(timeOpenCards);
    setTimeout(() => {
      const closedCards = closeAllCards(cards);
      setCards(closedCards);
    }, timeOpenCards);
  };

  const stopGame = () => {
    setGameState(false);
    setCards([]);
    setScore(resetScore());
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
        setScore(increaseScore(score));
        if (isGameEnd(cards)) {
          setGameState(false);
        }
      } else {
        console.log("карты НЕ угаданы");
        setScore(decreaseScore(score));
        setTimeout(() => {
          setCards(closeCards(cards, firstSelectedCard, card));
          setFirstSelectedCard(null);
          setIsProgress(false);
        }, 1500);
      }
    }
  };

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <AppContext.Provider
      value={{
        cards,
        gameState,
        startGame,
        stopGame,
        openCard,
        score,
        isProgress,
        isOpenMenu,
        toggleMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
