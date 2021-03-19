export const increaseScore = (score: number | null): number => {
  score = setDefaultIfNull(score);
  return (score = score + 1);
};

export const decreaseScore = (score: number | null): number => {
  score = setDefaultIfNull(score);
  return (score = score - 1);
};

export const resetScore = (): number => {
  return 0;
};

export function setDefaultIfNull(digit: number | null): number {
  return digit === null ? 0 : digit;
}

export const showScoreUser = (score: number): string => {
  return `Вы набрали ${score} очков`;
};
