import React from "react";

type CardNumberProps = {
  times: number;
  onChangeTimeoutCards: (val: number) => void;
  errorMessage: string | null;
};

const CardsTimeout = (props: CardNumberProps) => {
  const times = props.times;
  const errorMessage = props.errorMessage;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChangeTimeoutCards(+e.target.value);
  };
  return (
    <div className="card-number">
      <label className="card-number__label">
        Количество секунд для запоминания открытых карт:
        <input
          className="card-number__input"
          type="numeric"
          value={times}
          onChange={handleOnChange}
        />
      </label>
      {errorMessage && (
        <span className="card-number__error">{errorMessage}</span>
      )}
    </div>
  );
};

export default CardsTimeout;
