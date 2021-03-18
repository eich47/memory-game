import { colors } from "./constants";
import { Card } from "./Types";

export function generateCards(numberCard = 16): Card[] {
  const res: Card[] = [];
  const pairCount = numberCard / 2;
  let count = 1;

  while (count <= pairCount) {
    const ind = `COLOR${count}`;
    const obj: Card = { figure: count + "", color: `${colors[ind]}` };
    res.push(Object.assign({}, obj));
    res.push(Object.assign({}, obj));
    count++;
  }

  return sortCards(res);
}

const sortCards = (arrCars: Array<Card>) => {
  return arrCars.sort(() => Math.random() - 0.5);
};
