import React from "react";
import "./styles.css";

const List = ({ coin }) => {
  return (
    <div>
      <h2>{coin.name}</h2>
    </div>
  );
};

export default List;
