import React, { useState } from "react";

export const increaseScore = (score: number): number => {
  return (score = score + 1);
};

export const decreaseScore = (score: number): number => {
  return (score = score - 1);
};

export const resetScore = (): number => {
  return 0;
};
