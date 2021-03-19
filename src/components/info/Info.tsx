import React from "react";
import "./Info.css";

type InfoProps = { text: string };

const Info = (props: InfoProps) => {
  return (
    <>
      <div className="info">{props.text}</div>
    </>
  );
};

export default Info;
