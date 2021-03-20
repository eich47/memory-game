import React from "react";

type CardNumberProps = {
  cardsNumber: number;
  onChangeCarsNumber: (val: number) => void;
  errorMessage: string | null;
};

const CardNumber = (props: CardNumberProps) => {
  const cardsNumber = props.cardsNumber;
  const errorMessage = props.errorMessage;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChangeCarsNumber(+e.target.value);
  };
  return (
    <div className="card-number">
      <label className="card-number__label">
        Введите количество карт для игры:
        <input
          className="card-number__input"
          type="numeric"
          value={cardsNumber}
          onChange={handleOnChange}
          onBlur={handleOnChange}
        />
      </label>
      {errorMessage && (
        <span className="card-number__error">{errorMessage}</span>
      )}
    </div>
  );
};

export default CardNumber;
