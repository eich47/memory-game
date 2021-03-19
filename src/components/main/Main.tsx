import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { showRule } from "../../models/game/GameModel";
import { showScoreUser } from "../../models/score/ScoreModel";
import CardList from "../cardsList/CardList";
import Info from "../info/Info";

const Main = () => {
  const { gameState, score } = useContext(AppContext);

  const setText = () => {
    if (score === null) {
      return showRule();
    } else {
      return showScoreUser(score);
    }
  };
  return (
    <main>
      <div className="wrapper">
        {gameState ? <CardList /> : <Info text={setText()} />}
      </div>
    </main>
  );
};

export default Main;
